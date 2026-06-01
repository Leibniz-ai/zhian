import io

# Read file
with io.open('frontend/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Chinese quotes with English quotes
content = content.replace(chr(0x201C), '"').replace(chr(0x201D), '"')

# Write back
with io.open('frontend/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed Chinese quotes!')
