import { useEffect, useRef, useState } from 'react'
import './App.css'

const API_BASE = 'http://127.0.0.1:8000'

async function fetchJson(path, options = {}) {
  let response
  try {
    response = await fetch(`${API_BASE}${path}`, options)
  } catch {
    throw new Error('无法连接 API 服务，请确认后端已在 http://127.0.0.1:8000 运行。')
  }
  if (!response.ok) {
    let detail = `Request failed: ${response.status}`
    try {
      const payload = await response.json()
      detail = payload.detail || payload.error || detail
    } catch {
      // ignore parse failure
    }
    throw new Error(detail)
  }
  return response.json()
}

function UploadCard({ label, file, onChange, hint, inputRef }) {
  return (
    <label className="upload-card">
      <span className="upload-label">{label}</span>
      <strong>{file ? file.name : 'Choose Excel file'}</strong>
      <small>{hint}</small>
      <input ref={inputRef} type="file" accept=".xlsx" onChange={onChange} />
    </label>
  )
}

function ProgressPanel({ job }) {
  const progress = Number(job?.progress || 0)
  return (
    <section className="panel progress-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Analysis Status</p>
          <h2>{job?.stage || 'Waiting to start'}</h2>
        </div>
        <span className={`status-pill status-${job?.status || 'idle'}`}>
          {job?.status || 'idle'}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-meta">
        <span>{job?.message || 'Upload the files, then click Run Analysis.'}</span>
      </div>
      {job?.error ? <p className="error-text">{job.error}</p> : null}
    </section>
  )
}

function PreviewTable({ title, preview }) {
  const columns = preview?.columns || []
  const rows = preview?.rows || []

  return (
    <section className="panel preview-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Preview</p>
          <h2>{title}</h2>
        </div>
        <span className="pill">{preview?.total_rows || 0} rows</span>
      </div>
      {columns.length ? (
        <div className="table-shell">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={`${title}-${index}`}>
                  {columns.map((column) => (
                    <td key={`${title}-${index}-${column}`}>{row[column] || ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="empty-text">The preview will appear here after the analysis finishes.</p>
      )}
    </section>
  )
}

function ExportPanel({ files }) {
  return (
    <section className="panel export-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Export</p>
          <h2>Download Final Files</h2>
        </div>
      </div>
      <div className="export-grid">
        {files.map((file) => (
          <a className="export-card" key={file.key} href={`${API_BASE}${file.download_url}`} target="_blank" rel="noreferrer">
            <strong>{file.label}</strong>
            <span>Download</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function ReportConfigPanel({ options, reportFilters, configuredReport, selectedTags, onChange, onToggleTag }) {
  const adidasProducts = options.products_by_brand?.adidas || []
  const tags = options.tags || []
  const productPairs = {
    HU071: { competitor: 'CI0919', category: '板鞋' },
    HU006: { competitor: '415445', category: '老爹鞋' },
  }
  const selectedProduct = reportFilters.client_product_id || configuredReport?.client?.product_id || adidasProducts[0] || ''
  const pairedProduct = productPairs[selectedProduct]

  return (
    <section className="panel report-config-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Report Configuration</p>
          <h2>Client vs Competitor Setup</h2>
        </div>
      </div>
      <div className="report-config-grid">
        <label>
          <span>Client Product</span>
          <select value={selectedProduct} onChange={(event) => onChange('client_product_id', event.target.value)}>
            <option value="">Default adidas product</option>
            {adidasProducts.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <div className="paired-product-card">
          <span>Auto Competitor Pair</span>
          <strong>{pairedProduct ? `nike ${pairedProduct.competitor}` : 'Auto selected by data'}</strong>
          <small>{pairedProduct ? `${selectedProduct} + ${pairedProduct.competitor} / ${pairedProduct.category}` : 'The report uses the confirmed adidas-Nike product mapping.'}</small>
        </div>
      </div>
      <div className="tag-picker">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={selectedTags.includes(tag) ? 'tag-chip selected' : 'tag-chip'}
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  )
}

function OverviewStrip({ overview }) {
  return (
    <section className="summary-strip">
      <article className="metric-card">
        <span>Total Reviews</span>
        <strong>{overview?.total_reviews || 0}</strong>
        <small>Rows available in the integrated review database</small>
      </article>
      <article className="metric-card">
        <span>Level 3 Tags</span>
        <strong>{overview?.tag_count || 0}</strong>
        <small>Semantic attributes defined in the tag scheme</small>
      </article>
      <article className="metric-card">
        <span>Comparable Pairs</span>
        <strong>{overview?.product_mapping?.length || 0}</strong>
        <small>Matched adidas and nike product pairs</small>
      </article>
    </section>
  )
}

function pairedCompetitorForClient(productId) {
  const productPairs = {
    HU071: 'CI0919',
    HU006: '415445',
  }
  return productPairs[productId] || ''
}

function PptReportTable({ report, selectedClientProduct, selectedTag, onSelectTag }) {
  const rows = report?.rows || []
  const clientProduct = selectedClientProduct || report?.client?.product_id || ''
  const competitorProduct = pairedCompetitorForClient(clientProduct) || report?.competitor?.product_id || ''
  return (
    <section className="panel ppt-report-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">PPT Report Engine Output</p>
          <h2>Attribute Mention and Sentiment Table</h2>
        </div>
        <span className="pill">{rows.length} attributes</span>
      </div>
      <div className="report-brief">
        <span>Client: adidas {clientProduct || '-'}</span>
        <span>Competitor: nike {competitorProduct || '-'}</span>
        <span>Positive &gt; 0.5; Negative &lt; -0.5</span>
      </div>
      <div className="table-shell">
        <table className="ppt-report-table">
          <thead>
            <tr>
              <th rowSpan="2">Attribute</th>
              <th colSpan="4">Client</th>
              <th colSpan="4">Client Competitor</th>
            </tr>
            <tr>
              <th>Mentioned</th>
              <th>+</th>
              <th>Neutral</th>
              <th>-</th>
              <th>Mentioned</th>
              <th>+</th>
              <th>Neutral</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.attribute}
                className={selectedTag === row.attribute ? 'selected-row' : ''}
                onClick={() => onSelectTag(row.attribute)}
              >
                <td>{row.attribute}</td>
                <td>{row.client?.mentioned ?? 0}</td>
                <td>{row.client?.positive ?? 0}</td>
                <td>{row.client?.neutral ?? 0}</td>
                <td>{row.client?.negative ?? 0}</td>
                <td>{row.competitor?.mentioned ?? 0}</td>
                <td>{row.competitor?.positive ?? 0}</td>
                <td>{row.competitor?.neutral ?? 0}</td>
                <td>{row.competitor?.negative ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function formatPercent(value) {
  return `${Math.round((value || 0) * 100)}%`
}

function NegativeRiskChart({ report, selectedTag, onSelectTag }) {
  const width = 860
  const height = 470
  const padding = { top: 44, right: 56, bottom: 76, left: 92 }
  const plotWidth = width - padding.left - padding.right
  const plotHeight = height - padding.top - padding.bottom
  const rows = report?.rows || []
  const rawPoints = rows.flatMap((row, index) => {
    const key = `X${index + 1}`
    const clientMentionRate = row.client?.sample_size ? (row.client.mentioned || 0) / row.client.sample_size : 0
    const competitorMentionRate = row.competitor?.sample_size ? (row.competitor.mentioned || 0) / row.competitor.sample_size : 0
    const clientNegativeRate = row.client?.mentioned ? (row.client.negative || 0) / row.client.mentioned : 0
    const competitorNegativeRate = row.competitor?.mentioned ? (row.competitor.negative || 0) / row.competitor.mentioned : 0
    return [
      {
        key,
        attribute: row.attribute,
        brandType: 'client',
        mentionRate: clientMentionRate,
        negativeRate: clientNegativeRate,
        color: '#1d211f',
      },
      {
        key,
        attribute: row.attribute,
        brandType: 'competitor',
        mentionRate: competitorMentionRate,
        negativeRate: competitorNegativeRate,
        color: '#e22a24',
      },
    ]
  })
  const maxMention = Math.max(...rawPoints.map((point) => point.mentionRate), 0.1)
  const maxNegative = Math.max(...rawPoints.map((point) => point.negativeRate), 0.1)
  const xMax = Math.min(1, Math.max(0.1, Math.ceil(maxMention * 10) / 10))
  const yMax = Math.min(1, Math.max(0.1, Math.ceil(maxNegative * 10) / 10))
  const ticks = [0, 0.25, 0.5, 0.75, 1]

  function xScale(value) {
    return padding.left + Math.min(value / xMax, 1) * plotWidth
  }

  function yScale(value) {
    return padding.top + plotHeight - Math.min(value / yMax, 1) * plotHeight
  }

  return (
    <section className="panel negative-risk-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">PPT Risk Chart</p>
          <h2>Negative Sentiment Proportion vs Mention Rate</h2>
        </div>
        <div className="chart-legend">
          <span><i className="legend-dot client-dot" />Client</span>
          <span><i className="legend-dot competitor-dot" />Competitor</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="negative-risk-chart" role="img" aria-label="negative sentiment proportion chart">
        <rect x={padding.left} y={padding.top} width={plotWidth} height={plotHeight} fill="#dbe6f4" />
        {ticks.map((tick) => {
          const x = padding.left + tick * plotWidth
          const y = padding.top + tick * plotHeight
          return (
            <g key={`grid-${tick}`}>
              <line x1={x} y1={padding.top} x2={x} y2={padding.top + plotHeight} stroke="rgba(255,255,255,0.9)" />
              <line x1={padding.left} y1={y} x2={padding.left + plotWidth} y2={y} stroke="rgba(255,255,255,0.9)" />
            </g>
          )
        })}
        {ticks.slice(1).map((tick) => (
          <text key={`x-${tick}`} x={padding.left + tick * plotWidth} y={height - 34} textAnchor="middle" className="chart-axis-text">
            {formatPercent(tick * xMax)}
          </text>
        ))}
        {ticks.slice(1).map((tick) => (
          <text key={`y-${tick}`} x={padding.left - 18} y={padding.top + plotHeight - tick * plotHeight + 5} textAnchor="end" className="chart-axis-text">
            {formatPercent(tick * yMax)}
          </text>
        ))}
        <text x={padding.left + plotWidth / 2} y={height - 10} textAnchor="middle" className="chart-axis-title">
          Mention Rate
        </text>
        <text x={24} y={padding.top + plotHeight / 2} textAnchor="middle" className="chart-axis-title vertical-axis">
          Negative Sentiment Proportion
        </text>
        {rawPoints.map((point) => {
          const active = selectedTag === point.attribute
          const x = xScale(point.mentionRate)
          const y = yScale(point.negativeRate)
          const labelDy = point.brandType === 'client' ? -12 : 20
          return (
            <g
              key={`${point.brandType}-${point.attribute}`}
              className="risk-point"
              onClick={() => onSelectTag(point.attribute)}
            >
              <circle cx={x} cy={y} r={active ? 7 : 5} fill={point.color} />
              <text
                x={Math.min(x + 10, width - padding.right)}
                y={Math.max(y + labelDy, padding.top + 14)}
                className={active ? 'risk-label active-risk-label' : 'risk-label'}
                fill={point.color}
              >
                {point.key}
              </text>
            </g>
          )
        })}
      </svg>
      <div className="attribute-key-grid">
        {rows.map((row, index) => (
          <button
            key={row.attribute}
            type="button"
            className={selectedTag === row.attribute ? 'attribute-key selected' : 'attribute-key'}
            onClick={() => onSelectTag(row.attribute)}
          >
            <strong>{`X${index + 1}`}</strong>
            <span>{row.attribute}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function ComparisonTable({ rows, selectedTag, onSelectTag }) {
  return (
    <section className="panel preview-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Brand Comparison</p>
          <h2>Adidas vs Nike by Tag</h2>
        </div>
        <span className="pill">{rows.length} tags</span>
      </div>
      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Adidas Mention Rate</th>
              <th>Adidas Sentiment</th>
              <th>Nike Mention Rate</th>
              <th>Nike Sentiment</th>
              <th>Sentiment Gap</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.tag}
                className={selectedTag === row.tag ? 'selected-row' : ''}
                onClick={() => onSelectTag(row.tag)}
              >
                <td>{row.tag}</td>
                <td>{(row.adidas?.mention_rate ?? 0).toFixed(3)}</td>
                <td>{row.adidas?.avg_sentiment ?? 'NA'}</td>
                <td>{(row.nike?.mention_rate ?? 0).toFixed(3)}</td>
                <td>{row.nike?.avg_sentiment ?? 'NA'}</td>
                <td>{row.sentiment_gap ?? 'NA'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function placeLabels(points, width, height, padding) {
  const labelWidth = 116
  const labelHeight = 22
  const minGap = 8
  const placed = []

  return points.map((point, index) => {
    const baseX = padding + Math.min(point.mention_rate * (width - padding * 2) * 1.5, width - padding - 10)
    const baseY = height / 2 - point.avg_sentiment * ((height - padding * 2) / 2)
    const candidates = [
      { dx: 14, dy: -12, anchor: 'start' },
      { dx: 14, dy: 16, anchor: 'start' },
      { dx: -14, dy: -12, anchor: 'end' },
      { dx: -14, dy: 16, anchor: 'end' },
      { dx: 0, dy: -18, anchor: 'middle' },
      { dx: 0, dy: 22, anchor: 'middle' },
    ]

    let chosen = null

    for (const candidate of candidates) {
      let x = baseX + candidate.dx
      let y = baseY + candidate.dy

      if (candidate.anchor === 'start') {
        x = Math.min(x, width - padding - labelWidth)
        x = Math.max(x, padding + 8)
      } else if (candidate.anchor === 'end') {
        x = Math.max(x, padding + labelWidth)
        x = Math.min(x, width - padding - 8)
      } else {
        x = Math.max(x, padding + labelWidth / 2)
        x = Math.min(x, width - padding - labelWidth / 2)
      }

      y = Math.max(y, padding + labelHeight)
      y = Math.min(y, height - padding - 6)

      const left = candidate.anchor === 'start' ? x : candidate.anchor === 'end' ? x - labelWidth : x - labelWidth / 2
      const top = y - labelHeight
      const box = {
        left,
        right: left + labelWidth,
        top,
        bottom: top + labelHeight,
      }

      const overlaps = placed.some((item) => {
        return !(
          box.right + minGap < item.left ||
          box.left > item.right + minGap ||
          box.bottom + minGap < item.top ||
          box.top > item.bottom + minGap
        )
      })

      if (!overlaps) {
        chosen = { ...candidate, x, y, box }
        placed.push(box)
        break
      }
    }

    if (!chosen) {
      const anchor = index % 2 === 0 ? 'start' : 'end'
      const x = anchor === 'start'
        ? Math.min(baseX + 14, width - padding - labelWidth)
        : Math.max(baseX - 14, padding + labelWidth)
      const y = Math.max(Math.min(baseY + (index % 3) * 16 - 14, height - padding - 6), padding + labelHeight)
      chosen = { x, y, anchor }
    }

    return { ...point, plotX: baseX, plotY: baseY, labelX: chosen.x, labelY: chosen.y, anchor: chosen.anchor }
  })
}

function QuadrantChart({ points, onSelectTag, selectedTag }) {
  const width = 760
  const height = 420
  const padding = 54
  const plottedPoints = placeLabels(points, width, height, padding)

  return (
    <section className="panel quadrant-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Quadrant</p>
          <h2>Importance vs Sentiment</h2>
        </div>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="quadrant-chart" role="img" aria-label="quadrant chart">
        <rect x="0" y="0" width={width} height={height} rx="24" fill="#fffdf6" />
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#d4cdb6" strokeDasharray="6 6" />
        <line x1={width / 2} y1={padding} x2={width / 2} y2={height - padding} stroke="#d4cdb6" strokeDasharray="6 6" />
        <text x={width - padding - 6} y={height / 2 - 10} className="axis-label" textAnchor="end">
          Higher mention rate
        </text>
        <text x={padding + 6} y={padding - 16} className="axis-label">
          Higher sentiment
        </text>
        {plottedPoints.map((point) => {
          const active = selectedTag === point.tag
          return (
            <g key={point.tag} onClick={() => onSelectTag(point.tag)} className="quadrant-point">
              <circle cx={point.plotX} cy={point.plotY} r={active ? 10 : 8} fill={active ? '#c26b35' : '#26543a'} />
              <text
                x={point.labelX}
                y={point.labelY}
                textAnchor={point.anchor}
                className={active ? 'point-label active-point-label' : 'point-label'}
              >
                {point.tag}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="empty-text">
        The x-axis shows mention rate. The y-axis shows average sentiment. Click any point to inspect the supporting evidence.
      </p>
    </section>
  )
}

function EvidencePanel({ selectedTag, evidence }) {
  return (
    <section className="panel evidence-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Evidence Drill-down</p>
          <h2>{selectedTag || 'Select a tag'}</h2>
        </div>
      </div>
      {!selectedTag ? (
        <p className="empty-text">Pick a tag from the table or the quadrant chart to show original evidence.</p>
      ) : (
        <div className="evidence-columns">
          <div>
            <h3>Positive Evidence</h3>
            {(evidence?.positive || []).length ? (
              (evidence.positive || []).map((item) => (
                <article className="evidence-card" key={`${item.review_uid}-${item.evidence_text}`}>
                  <strong>{item.brand} · {item.product_id}</strong>
                  <p>{item.evidence_text}</p>
                  <small>score: {item.sentiment_score}</small>
                </article>
              ))
            ) : (
              <p className="empty-text">No positive evidence.</p>
            )}
          </div>
          <div>
            <h3>Negative Evidence</h3>
            {(evidence?.negative || []).length ? (
              (evidence.negative || []).map((item) => (
                <article className="evidence-card negative-card" key={`${item.review_uid}-${item.evidence_text}`}>
                  <strong>{item.brand} · {item.product_id}</strong>
                  <p>{item.evidence_text}</p>
                  <small>score: {item.sentiment_score}</small>
                </article>
              ))
            ) : (
              <p className="empty-text">No negative evidence.</p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function ReviewEngineView({
  adidasRaw,
  nikeRaw,
  tagScheme,
  setAdidasRaw,
  setNikeRaw,
  setTagScheme,
  onFileChange,
  uploadFiles,
  runAnalysis,
  resetAnalysis,
  isUploading,
  isRunning,
  readyToUpload,
  readyToRun,
  job,
  error,
  preview,
  files,
  fileInputRefs,
}) {
  const finished = job?.status === 'completed'

  return (
    <section className="page-view">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Review Analysis Engine</p>
          <div className="hero-actions">
            <button onClick={uploadFiles} disabled={isUploading || isRunning || !readyToUpload}>
              {isUploading ? 'Uploading...' : 'Upload Files'}
            </button>
            <button className="secondary-button" onClick={runAnalysis} disabled={isUploading || isRunning || !readyToRun}>
              {isRunning ? 'Running Analysis...' : 'Run Analysis'}
            </button>
            <button className="danger-button" onClick={resetAnalysis} disabled={isUploading || isRunning}>
              Clear Session
            </button>
          </div>
          {error ? <p className="error-text">{error}</p> : null}
        </div>
        <ProgressPanel job={job} />
      </section>

      <section className="upload-grid">
        <UploadCard
          label="Client Raw Reviews"
          file={adidasRaw}
          onChange={(event) => onFileChange(setAdidasRaw, event.target.files?.[0] || null)}
          hint="Upload the adidas raw review Excel file"
          inputRef={fileInputRefs.adidas}
        />
        <UploadCard
          label="Competitor Raw Reviews"
          file={nikeRaw}
          onChange={(event) => onFileChange(setNikeRaw, event.target.files?.[0] || null)}
          hint="Upload the nike raw review Excel file"
          inputRef={fileInputRefs.nike}
        />
        <UploadCard
          label="Tag Scheme"
          file={tagScheme}
          onChange={(event) => onFileChange(setTagScheme, event.target.files?.[0] || null)}
          hint="Upload the Level 3 semantic tag scheme"
          inputRef={fileInputRefs.scheme}
        />
      </section>

      <section className="summary-strip">
        <article className="metric-card">
          <span>Required Uploads</span>
          <strong>3 files</strong>
          <small>Two raw review files and one tag scheme</small>
        </article>
        <article className="metric-card">
          <span>Current Stage</span>
          <strong>{job?.stage || 'Waiting'}</strong>
          <small>{job?.message || 'No task started yet'}</small>
        </article>
        <article className="metric-card">
          <span>Final Outputs</span>
          <strong>{files.length || 3} files</strong>
          <small>Customer reviews, sentiment result, and integrated database</small>
        </article>
      </section>

      <div className="results-grid">
        <PreviewTable title="客户评论最终版 Preview" preview={preview.customer_reviews} />
        <PreviewTable title="命中标签情感结果 Preview" preview={preview.sentiment_result} />
        <PreviewTable title="Integrated Database Preview" preview={preview.integrated_database} />
      </div>

      {finished && files.length ? <ExportPanel files={files} /> : null}
    </section>
  )
}

function ReportEngineView({
  overview,
  options,
  comparison,
  quadrant,
  configuredReport,
  selectedTag,
  evidence,
  reportFilters,
  selectedReportTags,
  hasReportData,
  onReportFilterChange,
  onToggleReportTag,
  onSelectTag,
  reportError,
}) {
  return (
    <section className="page-view">
      <section className="hero-section report-hero">
        <div className="hero-copy">
          <p className="eyebrow">Report Engine</p>
        </div>
      </section>

      {hasReportData ? (
        <>
          <OverviewStrip overview={overview} />
          <ReportConfigPanel
            options={options}
            reportFilters={reportFilters}
            configuredReport={configuredReport}
            selectedTags={selectedReportTags}
            onChange={onReportFilterChange}
            onToggleTag={onToggleReportTag}
          />
          {reportError ? <p className="error-text">{reportError}</p> : null}
          <PptReportTable
            report={configuredReport}
            selectedClientProduct={reportFilters.client_product_id}
            selectedTag={selectedTag}
            onSelectTag={onSelectTag}
          />
          <NegativeRiskChart report={configuredReport} selectedTag={selectedTag} onSelectTag={onSelectTag} />
          <div className="report-grid">
            <ComparisonTable rows={comparison.rows || []} selectedTag={selectedTag} onSelectTag={onSelectTag} />
            <QuadrantChart points={quadrant.points || []} selectedTag={selectedTag} onSelectTag={onSelectTag} />
          </div>
          <EvidencePanel selectedTag={selectedTag} evidence={evidence} />
        </>
      ) : (
        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">No Report Data</p>
              <h2>Run analysis first</h2>
            </div>
          </div>
          <p className="empty-text">
            The report engine will stay empty after clearing the session. Upload files and run analysis again to populate the overview, comparison table, quadrant chart, and evidence cards.
          </p>
        </section>
      )}
    </section>
  )
}

function App() {
  const [activeView, setActiveView] = useState('review')
  const [adidasRaw, setAdidasRaw] = useState(null)
  const [nikeRaw, setNikeRaw] = useState(null)
  const [tagScheme, setTagScheme] = useState(null)
  const [job, setJob] = useState(null)
  const [preview, setPreview] = useState({
    customer_reviews: { columns: [], rows: [], total_rows: 0 },
    sentiment_result: { columns: [], rows: [], total_rows: 0 },
    integrated_database: { columns: [], rows: [], total_rows: 0 },
  })
  const [files, setFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('')
  const [overview, setOverview] = useState({})
  const [options, setOptions] = useState({})
  const [comparison, setComparison] = useState({ rows: [] })
  const [quadrant, setQuadrant] = useState({ points: [] })
  const [configuredReport, setConfiguredReport] = useState({ config: {}, client: {}, competitor: {}, rows: [] })
  const [selectedTag, setSelectedTag] = useState('')
  const [evidence, setEvidence] = useState({ positive: [], negative: [] })
  const [reportError, setReportError] = useState('')
  const [reportFilters, setReportFilters] = useState({
    client_product_id: '',
  })
  const [selectedReportTags, setSelectedReportTags] = useState([])
  const [uploadedSignature, setUploadedSignature] = useState('')
  const timerRef = useRef(null)
  const adidasInputRef = useRef(null)
  const nikeInputRef = useRef(null)
  const schemeInputRef = useRef(null)

  const selectedSignature = [adidasRaw?.name, nikeRaw?.name, tagScheme?.name].filter(Boolean).join('|')
  const readyToUpload = Boolean(adidasRaw && nikeRaw && tagScheme)
  const readyToRun = Boolean(readyToUpload && uploadedSignature && uploadedSignature === selectedSignature && job?.status === 'ready')
  const hasReportData = job?.status === 'completed'

  function handleFileChange(setter, file) {
    setter(file)
    setUploadedSignature('')
    setError('')
  }

  function buildReportQuery(productId = reportFilters.client_product_id) {
    const params = new URLSearchParams()
    if (productId) params.set('client_product_id', productId)
    if (selectedReportTags.length) params.set('tags', selectedReportTags.join(','))
    return params.toString()
  }

  function buildQuadrantQuery(productId = reportFilters.client_product_id) {
    const params = new URLSearchParams()
    if (productId) params.set('client_product_id', productId)
    return params.toString()
  }

  function clearReportState() {
    setOverview({})
    setOptions({})
    setComparison({ rows: [] })
    setQuadrant({ points: [] })
    setConfiguredReport({ config: {}, client: {}, competitor: {}, rows: [] })
    setSelectedTag('')
    setEvidence({ positive: [], negative: [] })
    setReportError('')
    setReportFilters({
      client_product_id: '',
    })
    setSelectedReportTags([])
  }

  async function refreshJobStatus() {
    const jobData = await fetchJson('/api/job-status')
    setJob(jobData)
    return jobData
  }

  async function refreshResultAssets() {
    const [previewData, fileData] = await Promise.all([
      fetchJson('/api/results/preview?limit=5'),
      fetchJson('/api/results/files'),
    ])
    setPreview(previewData)
    setFiles(fileData.files || [])
  }

  async function refreshReportData(nextSelectedTag = selectedTag, productId = reportFilters.client_product_id) {
    try {
      const reportQuery = buildReportQuery(productId)
      const quadrantQuery = buildQuadrantQuery(productId)
      const [overviewData, optionsData, configuredReportData, comparisonData, quadrantData] = await Promise.all([
        fetchJson('/api/overview'),
        fetchJson('/api/options'),
        fetchJson(`/api/report/configured-table${reportQuery ? `?${reportQuery}` : ''}`),
        fetchJson(`/api/report/brand-comparison${reportQuery ? `?${reportQuery}` : ''}`),
        fetchJson(`/api/report/quadrant${quadrantQuery ? `?${quadrantQuery}` : ''}`),
      ])
      setOverview(overviewData)
      setOptions(optionsData)
      if (!reportFilters.client_product_id && (configuredReportData.client?.product_id || optionsData.products_by_brand?.adidas?.[0])) {
        setReportFilters((current) => ({
          ...current,
          client_product_id: current.client_product_id || configuredReportData.client?.product_id || optionsData.products_by_brand.adidas[0],
        }))
      }
      setConfiguredReport(configuredReportData)
      setComparison(comparisonData)
      setQuadrant(quadrantData)

      const fallbackTag = nextSelectedTag || configuredReportData.rows?.[0]?.attribute || comparisonData.rows?.[0]?.tag || ''
      setSelectedTag(fallbackTag)
      if (fallbackTag) {
        const evidenceParams = new URLSearchParams({ tag: fallbackTag })
        const evidenceData = await fetchJson(`/api/report/evidence?${evidenceParams.toString()}`)
        setEvidence(evidenceData)
      } else {
        setEvidence({ positive: [], negative: [] })
      }
      setReportError('')
    } catch (err) {
      setReportError(err.message)
    }
  }

  useEffect(() => {
    refreshJobStatus()
      .then((latest) => {
        setError('')
        if (latest.status === 'completed') {
          refreshResultAssets().catch((err) => setError(err.message))
          refreshReportData().catch((err) => setReportError(err.message))
        } else {
          clearReportState()
        }
      })
      .catch(() => {
        clearReportState()
      })
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (job?.status === 'completed') {
      refreshReportData().catch((err) => setReportError(err.message))
    }
  }, [reportFilters.client_product_id, selectedReportTags])

  useEffect(() => {
    const isActiveJob = job?.status === 'running' || job?.status === 'queued'
    if (!isActiveJob) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
      setIsRunning(false)
      return
    }

    if (!timerRef.current) {
      timerRef.current = window.setInterval(async () => {
        try {
          const latest = await refreshJobStatus()
          const isStillActive = latest.status === 'running' || latest.status === 'queued'
          if (!isStillActive && timerRef.current) {
            window.clearInterval(timerRef.current)
            timerRef.current = null
            if (latest.status === 'completed') {
              refreshResultAssets().catch((err) => setError(err.message))
              refreshReportData().catch((err) => setReportError(err.message))
            } else {
              clearReportState()
            }
          }
        } catch (err) {
          setError(err.message)
        }
      }, 1800)
    }

    return () => {
      if (timerRef.current && !isActiveJob) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [job])

  async function uploadFiles() {
    if (!adidasRaw || !nikeRaw || !tagScheme) {
      setError('Please upload two raw review files and one tag scheme file first.')
      return
    }
    setIsUploading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('adidas_raw', adidasRaw)
      formData.append('nike_raw', nikeRaw)
      formData.append('tag_scheme', tagScheme)
      await fetchJson('/api/upload-files', {
        method: 'POST',
        body: formData,
      })
      setUploadedSignature(selectedSignature)
      await refreshJobStatus()
    } catch (err) {
      setError(err.message)
    } finally {
      setIsUploading(false)
    }
  }

  async function runAnalysis() {
    setIsRunning(true)
    setError('')
    try {
      const nextJob = await fetchJson('/api/run-analysis', { method: 'POST' })
      setJob(nextJob)
      const latest = await refreshJobStatus()
      if (latest.status === 'completed') {
        await refreshResultAssets()
        await refreshReportData()
      }
    } catch (err) {
      setError(err.message)
      setIsRunning(false)
    }
  }

  async function resetAnalysis() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
    setJob((current) => ({
      ...(current || {}),
      status: 'idle',
      stage: 'Waiting to upload',
      progress: 0,
      message: 'Session cleared. Upload new files to start another analysis.',
      error: '',
      outputs: {},
    }))
    setAdidasRaw(null)
    setNikeRaw(null)
    setTagScheme(null)
    setPreview({
      customer_reviews: { columns: [], rows: [], total_rows: 0 },
      sentiment_result: { columns: [], rows: [], total_rows: 0 },
      integrated_database: { columns: [], rows: [], total_rows: 0 },
    })
    setFiles([])
    setError('')
    setIsUploading(false)
    setIsRunning(false)
    setUploadedSignature('')
    clearReportState()

    for (const ref of [adidasInputRef, nikeInputRef, schemeInputRef]) {
      if (ref.current) {
        ref.current.value = ''
      }
    }

    try {
      const resetJob = await fetchJson('/api/reset-analysis', { method: 'POST' })
      setJob(resetJob)
    } catch (err) {
      setError(err.message)
    }
  }

  async function selectTag(tag) {
    if (job?.status !== 'completed') {
      return
    }

    setSelectedTag(tag)
    try {
      const params = new URLSearchParams({ tag })
      const payload = await fetchJson(`/api/report/evidence?${params.toString()}`)
      setEvidence(payload)
    } catch (err) {
      setReportError(err.message)
    }
  }

  function updateReportFilter(key, value) {
    setReportFilters((current) => ({
      ...current,
      [key]: value,
    }))
    if (key === 'client_product_id' && job?.status === 'completed') {
      refreshReportData('', value).catch((err) => setReportError(err.message))
    }
  }

  function toggleReportTag(tag) {
    setSelectedReportTags((current) => {
      if (current.includes(tag)) {
        return current.filter((item) => item !== tag)
      }
      return [...current, tag]
    })
  }

  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <p className="eyebrow">MKT6032 Project 2</p>
          <h2>Customer Review Engine</h2>
        </div>
        <nav className="sidebar-nav">
          <button
            className={activeView === 'review' ? 'nav-button active' : 'nav-button'}
            onClick={() => setActiveView('review')}
          >
            Review Analysis Engine
          </button>
          <button
            className={activeView === 'report' ? 'nav-button active' : 'nav-button'}
            onClick={() => setActiveView('report')}
          >
            Report Engine
          </button>
        </nav>
        <div className="sidebar-note">
          <strong>Upload Rule</strong>
          <p>
            The app validates Excel headers instead of the original file names.
          </p>
        </div>
      </aside>

      <section className="content-shell">
        {activeView === 'review' ? (
          <ReviewEngineView
            adidasRaw={adidasRaw}
            nikeRaw={nikeRaw}
            tagScheme={tagScheme}
            setAdidasRaw={setAdidasRaw}
            setNikeRaw={setNikeRaw}
            setTagScheme={setTagScheme}
            onFileChange={handleFileChange}
            uploadFiles={uploadFiles}
            runAnalysis={runAnalysis}
            resetAnalysis={resetAnalysis}
            isUploading={isUploading}
            isRunning={isRunning}
            readyToUpload={readyToUpload}
            readyToRun={readyToRun}
            job={job}
            error={error}
            preview={preview}
            files={files}
            fileInputRefs={{
              adidas: adidasInputRef,
              nike: nikeInputRef,
              scheme: schemeInputRef,
            }}
          />
        ) : (
          <ReportEngineView
            overview={overview}
            options={options}
            comparison={comparison}
            quadrant={quadrant}
            configuredReport={configuredReport}
            selectedTag={selectedTag}
            evidence={evidence}
            reportFilters={reportFilters}
            selectedReportTags={selectedReportTags}
            hasReportData={hasReportData}
            onReportFilterChange={updateReportFilter}
            onToggleReportTag={toggleReportTag}
            onSelectTag={selectTag}
            reportError={reportError}
          />
        )}
      </section>
    </main>
  )
}

export default App
