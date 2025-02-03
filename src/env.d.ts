/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Hero部分の背景エフェクトにデバッグ情報を表示するか否か */
  readonly PUBLIC_HERO_EFFECT_ENABLE_DEBUG: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
