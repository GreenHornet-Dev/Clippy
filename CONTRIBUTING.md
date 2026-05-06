# Contributing to Clippy Q&A App

Thank you for your interest in contributing! Here's how you can help.

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/clippy-qa-app.git
   cd clippy-qa-app
   ```
3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**
5. **Commit** with clear messages:
   ```bash
   git commit -m "Add: Description of what you added"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub

## Development

Since Clippy is a single-file HTML application:

1. Open `index-code-edition.html` in VSCode (or your editor)
2. The React component code is in the `<script>` section
3. Make changes and save
4. Open the file in a browser to test
5. Refresh the browser to see updates

### Testing Your Changes

- Test all three tabs: Chat, Browse, Admin
- Try adding/editing/deleting Q&A items
- Test import/export functionality
- Test search with various keywords
- Test code snippet display and copy button
- Test on different browsers if possible

## Code Style

- Use clear, descriptive variable names
- Add comments for complex logic
- Keep the file organized: state → effects → handlers → render

## Types of Contributions

### Bug Reports
- Describe the problem clearly
- Include steps to reproduce
- Mention browser and OS
- Add screenshots if helpful

### Feature Requests
- Explain the use case
- Describe the desired behavior
- Suggest implementation if possible

### Code Changes
- Small improvements (typo fixes, optimizations)
- New features (see Feature Ideas below)
- Better documentation
- Performance improvements

## Feature Ideas

Ideas for future enhancements:

- **Categories Management UI** - Visual category editor in Admin tab
- **Keyboard Navigation** - Arrow keys to navigate Chat results
- **Export Formats** - CSV, Excel, PDF export options
- **Search Filters** - Filter by category while searching
- **Dark Mode** - Theme toggle
- **Keyboard Shortcuts** - Customizable hotkeys
- **Multi-language** - i18n support
- **Backup System** - Auto-save to localStorage with recovery
- **Sync** - Cloud sync for Q&A data
- **Analytics** - Track popular questions/answers
- **Rate Limiting** - Throttle API calls if adding backend
- **Categories Hierarchy** - Nested categories/subcategories

## Questions?

- Check the README.md for common questions
- Look at QUICK-START.txt for usage examples
- Open an issue with the `question` label

## Code of Conduct

Be respectful, inclusive, and helpful. We're building this together!

---

**Happy contributing! 🚀**
