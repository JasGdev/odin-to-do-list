# Budget Tracker

A modular budget tracking web app built as part of The Odin Project curriculum.  
Originally started as a to-do list assignment, this project evolved into a full budget tracker with persistent state, advanced filtering, and visual summaries.

## Features

### Item fields
- Date  
- Name  
- Category  
- Cost  
- Count  
- Total (Cost × Count)  
- Description  
- Priority  
- ID (internal / hidden)

### Core functionality
- Add items with autofill suggestions for existing item names and categories
- Delete individual items
- Delete all items
- Undo delete
- Assign a background color per category to visually distinguish items
- Persistent state using browser localStorage
- Summary dashboard with a pie chart showing spending by category
- Reset all data (clears localStorage and current session)
- Populate app with sample items for testing and demos

### Filtering & sorting
- Filter items by category (show / hide categories)
- Keyword search filter
- Date range filtering:
  - Start month only
  - End month only
  - Start → end month range
- Sortable columns (ascending / descending via left-click / right-click):
  - Date
  - Name
  - Cost
  - Count
  - Total
  - Category
  - Priority


  ## Tech stack
- JavaScript (ES6 modules)
- Webpack (bundling, dev server, asset handling)
- CSS
- Chart.js
- Browser localStorage for persistence
