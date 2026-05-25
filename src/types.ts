export type {
  BuildCtx,
  ChangeEvent,
  CSSResource,
  JSResource,
  ProcessedContent,
  QuartzEmitterPlugin,
  QuartzEmitterPluginInstance,
  QuartzFilterPlugin,
  QuartzFilterPluginInstance,
  QuartzPluginData,
  QuartzTransformerPlugin,
  QuartzTransformerPluginInstance,
  StaticResources,
  PageMatcher,
  PageGenerator,
  VirtualPage,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
} from "@quartz-community/types";

export interface ClickableImagesOptions {
  /** CSS class added to the lightbox wrapper. */
  wrapperClass: string;
  /** CSS class added to the image element. */
  imageClass: string;
  /** Enable the lightbox modal on click. */
  enableLightbox: boolean;
}
