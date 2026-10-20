/**
 * about-page controller
 */

import { factories } from '@strapi/strapi';

const defaultPopulate = {
  Heroo: true,
  Statistics: true,
  CompanyIntro: {
    populate: {
      image: true,
      highlights: {
        populate: {
          icon: true,
        },
      },
    },
  },
  Philosophy: {
    populate: {
      cards: {
        populate: {
          icon: true,
          bullets: true,
        },
      },
    },
  },
  Collaborationn: true,
};

export default factories.createCoreController('api::about-page.about-page', ({ strapi }) => ({
  async find(ctx) {
    // If the frontend doesn't specify a populate query, or just asks for "*", we inject our deep populate object
    if (!ctx.query.populate || ctx.query.populate === '*') {
      ctx.query.populate = defaultPopulate;
    }

    return await super.find(ctx);
  },
}));
