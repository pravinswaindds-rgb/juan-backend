import { factories } from '@strapi/strapi';

const defaultPopulate = {
  Hero: {
    populate: {
      primaryButton: true,
      secondaryButton: true,
      backgroundImage: true,
    },
  },
  Marquee: true,
  LatestProjects: {
    populate: {
      projects: {
        populate: {
          thumbnail: true,
          featuredImage: true,
          technologies: {
            populate: {
              icon: true,
            },
          },
        },
      },
      ViewAllButton: true,
    },
  },
  CTA: true,
  WhyChooseUs: {
    populate: {
      cards: {
        populate: {
          icon: true,
        },
      },
    },
  },
  Contact: {
    populate: {
      Items: {
        populate: {
          Icon: true,
        },
      },
      ContactForm: {
        populate: {
          SubmitButton: true,
        },
      },
    },
  },
  CTAA: {
    populate: {
      primaryButton: true,
      secondaryButton: true,
    },
  },
};

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx) {
    if (!ctx.query.populate || ctx.query.populate === '*') {
      ctx.query.populate = defaultPopulate;
    }

    return await super.find(ctx);
  },
}));




