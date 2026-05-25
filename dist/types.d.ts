export { BuildCtx, CSSResource, ChangeEvent, JSResource, PageGenerator, PageMatcher, ProcessedContent, QuartzEmitterPlugin, QuartzEmitterPluginInstance, QuartzFilterPlugin, QuartzFilterPluginInstance, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzPluginData, QuartzTransformerPlugin, QuartzTransformerPluginInstance, StaticResources, VirtualPage } from '@quartz-community/types';

interface ClickableImagesOptions {
    /** CSS class added to the lightbox wrapper. */
    wrapperClass: string;
    /** CSS class added to the image element. */
    imageClass: string;
    /** Enable the lightbox modal on click. */
    enableLightbox: boolean;
}

export type { ClickableImagesOptions };
