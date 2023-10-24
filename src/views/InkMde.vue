<script lang="ts" setup>
import { ink } from 'ink-mde-laf'
import { onMounted } from 'vue'
onMounted(() => {
  const editor = ink(document.getElementById('editor')!, {
    doc: '',
    files: {
      clipboard: false,
      dragAndDrop: false,
      handler: () => {},
      injectMarkup: true,
      types: ['image/*']
    },
    interface: {
      appearance: 'light' as const,
      attribution: false,
      autocomplete: true,
      images: true,
      lists: true,
      readonly: false,
      spellcheck: false,
      toolbar: false
    },
    katex: false,
    keybindings: {
      tab: true,
      shiftTab: true
    },
    placeholder: '请输入文字...',
    plugins: [],
    readability: false,
    search: true,
    selections: [],
    toolbar: {
      bold: true,
      code: false,
      codeBlock: true,
      heading: true,
      image: true,
      italic: true,
      link: true,
      list: true,
      orderedList: true,
      quote: true,
      taskList: true,
      upload: false
    },
    // This value overrides both `tab` and `shiftTab` keybindings.
    trapTab: undefined,
    vim: {
      open: true,
      map: [
        {
          before: 'jj',
          after: '<Esc>',
          mode: 'insert'
        }
      ]
    }
  })
})
</script>

<template>
  <div ref="willow" class="willow-mde" id="editor"></div>
</template>

<style>
.ink {
  --ink-internal-syntax-monospace-font-family: ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji' !important;
}

.willow-mde {
  background-color: #fff;
  height: 100%;
}

.ink-mde {
  height: 100%;
  border: none !important;
  border-radius: none !important;
}

.ink-mde-editor {
  padding: 1.5rem !important;
}

.willow-mde .cm-focused {
  outline: unset !important;
}
.willow-mde .cm-line img.cm-widgetBuffer {
  display: none !important;
  height: 0 !important;
}
</style>
