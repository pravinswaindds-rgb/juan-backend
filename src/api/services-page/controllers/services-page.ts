/**
 * services-page controller
 */

import { factories } from '@strapi/strapi';

const defaultPopulate = {
  Heroo: true,
  Statistics: true,
  CTAA: true,
  Servicessection: {
    populate: {
      Services: {
        populate: {
          Icon: true,
        },
      },
    },
  },
  FeaturedProject: {
    populate: {
      image: true,
      CTAButtons: true,
    },
  },
};

export default factories.createCoreController('api::services-page.services-page', ({ strapi }) => ({
  async find(ctx) {
    // If the frontend doesn't specify a populate query, or just asks for "*", we inject our deep populate object
    if (!ctx.query.populate || ctx.query.populate === '*') {
      ctx.query.populate = defaultPopulate;
    }

    return await super.find(ctx);
  },
}));
