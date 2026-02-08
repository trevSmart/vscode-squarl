<p align="center">
  <img alt="Squarl Bookmarks" src="https://raw.githubusercontent.com/trevSmart/vscode-squarl/main/assets/logo/logo.png" style="width: 96px; height: 48px; object-fit: cover; object-position: center;">
</p>

<h1 align="center">
  <span style="font-weight: 500">Squarl Bookmarks</span>
  <br/>
  <span style="font-weight: 100">(fork by trevSmart)</span>
</h1>

<h2 align="center">Bookmark important files and/or links for your projects.</h2>

<p>
  <strong>This is a fork of the original <a href="https://github.com/estruyf/vscode-squarl">Squarl Bookmarks</a> extension by <a href="https://github.com/estruyf">Elio Struyf</a>.</strong>
  <em>Maintained by <a href="https://github.com/trevSmart">trevSmart</a> with visual improvements and updates</em>
</p>

## Why Squarl Bookmarks

Every project has various dependencies, not only the onces we use to code, but also the once around the project. Like: task lists, project management, documentation, ...

In most cases, you share this information of which platforms and/or systems used with your team. What if you can bring it closer to the project?

This is the purpose of Squarl Bookmarks to allow you and your team to create and share these bookmarks. Instead of opening your browser, looking for the project bookmark, and navigating to it. You can now add the bookmark in your project and navigate instantly from within Visual Studio Code to it.

You can use Squarl Bookmarks to store bookmarks personally (in VS Code `.vscode/settings.json` or the global user settings) or with your team (via a `squarl.json` file).

## Features

The extension comes with the following features:

- Add files or links to your bookmarks list
- Search through all the bookmarks in your list
- Create groups
- Deleted project files are shown in a seperate group

## How to use it

The intention of the Squarl Bookmarks extension is to allow you to be able to quickly navigate to any of your important project files or links.

You can use the extension for personal or team purposes.

### Personal

When you install the extension, and open the Squarl Bookmarks panel. You will see the welcome view with the ability to add a file or link.

Another way to add a file or link to your bookmarks list, is to use one of the commands:

- Squarl: Bookmark link (`squarl.bookmark.addLink`)
- Squarl: Bookmark file (`squarl.bookmark.addFile`)

Once you've added bookmarks, the view will be updated to the bookmarks list view.

> **Note**: Global bookmarks are stored in the Visual Studio Code global user settings, the project bookmarks are stored in the `.vscode/settings.json` file of the current project.

### Team

For team bookmarks, you'll need to create the team file, you can do this manually by creating a `squarl.json` file in the current project, or with the **Squarl: Initialize team file** (`squarl.team.init`) command.

Once the file is created, you can add your **groups** and **bookmarks** to it.

Initial file content:

```json
{
  "name": "Team bookmarks",
  "groups": [],
  "bookmarks": []
}
```

The object structure of the [group](#group-item) and [bookmark](#bookmark-item) items is the same as that of you personal bookmarks.

It is a manual process to add the groups and bookmarks to the file.

Once this file contains bookmarks, a team bookmarks view will appear.

## Commands

The extension has the following commands for you to make use:

| Command | Title |
| --- | --- |
| `squarl.bookmark.addFile` | Squarl: Bookmark file |
| `squarl.bookmark.addLink` | Squarl: Bookmark link |
| `squarl.bookmark.edit` | Squarl: Edit |
| `squarl.bookmark.delete` | Squarl: Delete |
| `squarl.bookmark.demote` | Squarl: Demote |
| `squarl.bookmark.open` | Squarl: Open a bookmark |
| `squarl.bookmark.promote` | Squarl: Promote |
| `squarl.bookmark.search` | Squarl: Search for a bookmark |
| `squarl.group.assign` | Squarl: Assign group |
| `squarl.group.create` | Squarl: Create a bookmark group |
| `squarl.group.edit` | Squarl: Edit group |
| `squarl.group.delete` | Squarl: Delete group |
| `squarl.sort.down` | Squarl: Move down |
| `squarl.sort.up` | Squarl: Move up |
| `squarl.team.init` | Squarl: Initialize team file |

## Settings

The extension uses the following settings to manage the behavior:

| Setting | Description | Default |
| --- | --- | --- |
| `squarl.bookmarks` | The list of bookmarks | `[]` |
| `squarl.groups` | The list of groups you want to use | `[]` |

### Bookmark item

Bookmark items contain the following properties:

- **name**: Name of the bookmark
- **path**: Relative path to the file or URL
- **description**: Description for your bookmark (optional)
- **type**: `file` or `link`
- **groupId**: ID of the group (optional)
- **iconName**: Name of the icon to set for the link (optional)

Example:

```json
{
  "name": "Bookmark title",
  "path": "<relative path to file> or <link>",
  "description": "Bookmark description",
  "type": "file|link",
  "groupId": "group",
  "iconName": "bookmark"
}
```

### Group item

Group items contain the following properties:

- **id**: ID of the group
- **name**: Name of the group

Example:

```json
{
  "id": "group",
  "name": "Group"
}
```

## Contributors ✨

<p align="center">
  <a href="https://github.com/trevSmart/vscode-squarl/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=trevSmart/vscode-squarl" />
  </a>
</p>

## License

[MIT](./LICENSE)

## Credits

This is a fork of the original [Squarl Bookmarks](https://github.com/estruyf/vscode-squarl) extension created by [Elio Struyf](https://github.com/estruyf). All credit for the original concept, design, and implementation goes to Elio and the original contributors.

</p>