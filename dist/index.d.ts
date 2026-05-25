import { QuartzTransformerPlugin } from '@quartz-community/types';
export { QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzTransformerPlugin, QuartzTransformerPluginInstance } from '@quartz-community/types';
import { ClickableImagesOptions } from './types.js';

/**
 * Transformer that wraps images in a clickable lightbox wrapper.
 */
declare const ClickableImages: QuartzTransformerPlugin<Partial<ClickableImagesOptions>>;

export { ClickableImages, ClickableImagesOptions };
