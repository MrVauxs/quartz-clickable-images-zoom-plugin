# Clickable Images (Quartz 5 Plugin)

Adds a lightbox zoom effect to all images in your Quartz 5 site. Clicking an image opens a full-screen modal with smooth transitions and keyboard support.

## Features

- Wraps all images in a clickable wrapper
- Smooth lightbox modal with backdrop blur
- Smart image scaling based on original display size
- Keyboard support (Escape to close)
- Mobile-responsive design
- Lazy loading for images

## Installation

```bash
npx quartz plugin add github:MrVauxs/quartz-clickable-images-zoom-plugin
```

## Usage

Add to your `quartz.config.yaml`:

```yaml
plugins:
  - source: github:MrVauxs/quartz-clickable-images-zoom-plugin
    enabled: true
```

Or configure options in `quartz.config.yaml`:

```yaml
plugins:
  - source: github:MrVauxs/quartz-clickable-images-zoom-plugin
    enabled: true
    options:
      enableLightbox: true
      wrapperClass: "lightbox-wrapper"
      imageClass: "lightbox-image"
```

## Options

| Option           | Type      | Default              | Description                                                                          |
| ---------------- | --------- | -------------------- | ------------------------------------------------------------------------------------ |
| `enableLightbox` | `boolean` | `true`               | Enable the lightbox modal on click. Set to `false` for wrapper + hover effects only. |
| `wrapperClass`   | `string`  | `"lightbox-wrapper"` | CSS class applied to the image wrapper div.                                          |
| `imageClass`     | `string`  | `"lightbox-image"`   | CSS class applied to the image element.                                              |

## Development

```bash
npm install
npm run dev     # Watch mode
npm run build   # Production build
```

> **Note:** After building, commit the `dist/` directory. It is not gitignored so Quartz can use the pre-built output.

## License

MIT
