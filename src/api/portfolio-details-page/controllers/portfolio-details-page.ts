/**
 * portfolio-details-page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::portfolio-details-page.portfolio-details-page', ({ strapi }) => ({
  async find(ctx) {
    // Inject the deep population into the query defaults
    ctx.query = {
      ...ctx.query,
      populate: {
        ...(ctx.query.populate || {}),
        Hero: { populate: '*' },
        ProjectOverview: { populate: '*' },
        Gallery: { populate: '*' },
        HowToPlay: { populate: '*' },
        ProjectTag: { populate: '*' },
        QRCode: { populate: '*' },
        DownloadLinks: { populate: '*' },
        CTA: { populate: '*' },
      },
    };

    // Call the default core find action
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Also inject into findOne if you ever fetch a single document by its ID
    ctx.query = {
      ...ctx.query,
      populate: {
        ...(ctx.query.populate || {}),
        Hero: { populate: '*' },
        ProjectOverview: { populate: '*' },
        Gallery: { populate: '*' },
        HowToPlay: { populate: '*' },
        ProjectTag: { populate: '*' },
        QRCode: { populate: '*' },
        DownloadLinks: { populate: '*' },
        CTA: { populate: '*' },
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  }
}));
