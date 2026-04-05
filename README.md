# Clippy Q&A Application

A web-based chatbot Q&A application that mirrors Power Virtual Agents / Copilot Studio functionality. Built with React and Tailwind CSS, runs entirely in the browser with no installation required.

## Features

✨ **Core Features:**
- 💬 **Chat Mode** - Interactive Q&A interface with keyword-based answer matching
- 📋 **Browse Mode** - View all Q&A items organized by category with filtering
- ⚙️ **Admin Panel** - Add/manage categories, questions, answers, descriptions, key phrases, and code snippets
- 🔍 **Smart Search** - Search across questions, answers, descriptions, key phrases, and code
- 📥 **Import/Export** - Download your data as JSON for backup or transfer to other systems
- 🤖 **PVA Migration** - Import topics exported from Power Virtual Agents / Copilot Studio into Clippy's Q&A format
- 💾 **Code Storage** - Store JavaScript, PowerShell scripts, or any code snippets with your Q&A items
- 📋 **Copy Button** - One-click copy functionality for code snippets
- 🎨 **Category Management** - Create custom categories with emoji icons

## Quick Start

### Installation
1. Download `index-code-edition.html`
2. Open the file directly in your web browser (Chrome, Firefox, Edge, Safari)
3. No server, npm, or installation required!

### First Steps
1. Open the **Admin** tab (⚙️)
2. Add a category (e.g., "Technical Support" with emoji 🔧)
3. Add a Q&A item with:
   - Question
   - Answer
   - Key phrases (comma-separated, e.g.: "error, issue, problem")
   - Description (optional)
   - Code snippet (optional)
4. Click **Save**
5. Test in **Chat** tab (💬) or **Browse** tab (📋)

## How It Works

### Chat Mode
- User types a question or keywords
- App searches and scores all Q&A items
- Displays the best matching answer
- Scoring: Direct question matches > key phrase matches > description matches

### Browse Mode
- View all Q&A organized by category
- Filter by category buttons
- Expand items to see full details
- Click copy button on code snippets (if present)

### Admin Mode
- **Add Category**: Name + emoji icon
- **Add Q&A Item**: 
  - Select category
  - Enter question and answer
  - Add key phrases (helps search matching)
  - Add description (searchable details)
  - Optional: Paste code/script snippets
- **Manage Data**:
  - Export: Downloads JSON file with all your Q&A data
  - Import: Upload previously exported JSON files
- **Delete Items**: Remove unwanted Q&A entries

## Migrating from Power Virtual Agents (PVA)

Clippy can import topics exported from Power Virtual Agents / Copilot Studio.

### Supported PVA JSON formats

| Format | Description |
|--------|-------------|
| Single topic object | `{ "name": "...", "triggerPhrases": [...], "nodes": [...] }` |
| Array of topics | `[ { "name": "..." }, ... ]` |
| Collection with `topics` key | `{ "topics": [ { "name": "..." }, ... ] }` |

### Field mapping

| PVA field | Clippy field | Notes |
|-----------|--------------|-------|
| `name` | Question | Topic name becomes the question |
| `triggerPhrases` | Key phrases | All trigger phrases joined with ", " |
| `description` | Description | Used as-is |
| `nodes` (Message/SendMessage type) | Answer | All message node texts joined with a space |

### How to import PVA topics

1. Open the **Admin** tab (⚙️)
2. In the **Data Management** section, click **🤖 Import PVA Topics**
3. Select your PVA JSON export file
4. Imported topics appear under the **PVA Import 🤖** category
5. Review each item — edit answers and assign to the correct category as needed

## Data Format

Q&A items are stored in JSON format:

```json
{
  "categories": [
    { "id": "cat1", "name": "Technical Support", "emoji": "🔧" }
  ],
  "qaItems": [
    {
      "id": "item1",
      "category": "cat1",
      "question": "How do I fix error X?",
      "answer": "Try these steps...",
      "keyPhrases": ["error X", "fix", "solution"],
      "description": "Common issues with component Y",
      "code": "console.log('example code here');"
    }
  ]
}
```

## Customization

### Change Colors
Open `index-code-edition.html` in a text editor and modify Tailwind classes:
- `bg-blue-500` → Change to any Tailwind color
- `text-white` → Change text colors
- `border-blue-300` → Change borders

### Change App Name
Search for "Clippy" in the HTML and replace with your app name.

### Change Layout
The app uses Tailwind CSS. Edit any `className` attributes to customize spacing, sizing, and styling.

## File Structure

```
clippy-qa-app/
├── index-code-edition.html    # Main application (single file)
├── qa-data.json               # Sample data file
├── README.md                  # Documentation (this file)
├── .gitignore                 # Git ignore rules
├── package.json               # Project metadata
├── LICENSE                    # MIT License
└── docs/
    ├── QUICK-START.txt        # Quick reference
    ├── FEATURES.md            # Detailed features
    └── DEVELOPMENT.md         # For developers
```

## Keyboard Shortcuts

- **Chat Tab**: Press Enter to search
- **Browse Tab**: Click category buttons to filter
- **Admin Tab**: Tab key to move between form fields

## Troubleshooting

**Q: Data disappeared after refresh**
- A: All data is stored in memory. Use Export to save your Q&A items, then Import them after reopening.

**Q: Search not finding my answer**
- A: Add relevant key phrases to your Q&A item. Search looks in questions, answers, key phrases, and descriptions.

**Q: Can I use this with a backend server?**
- A: Currently browser-only. To add backend, modify the export/import functions to hit API endpoints instead.

**Q: How do I backup my data?**
- A: Use the Admin > Export Data button regularly. This downloads a timestamped JSON file with all Q&A items.

## Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

Requires ES6+ JavaScript support.

## Development

### Technologies Used
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vanilla JavaScript** - Logic

### Local Development
To modify the HTML/React code:
1. Open `index-code-edition.html` in your editor (VSCode recommended)
2. Make changes
3. Refresh browser to see updates

### Building From Source
The app is a single HTML file. To customize:
1. Locate the `<script>` section at the bottom
2. Modify the React component code
3. Save and refresh browser

## Contributing

Found a bug? Have a feature request? See CONTRIBUTING.md

## License

MIT License - See LICENSE file for details

## Support

- 📖 Documentation: See docs/ folder
- 🐛 Issues: Create an issue on GitHub
- 💬 Questions: Check QUICK-START.txt for common tasks

---

**Created with ❤️ for better Q&A management**
