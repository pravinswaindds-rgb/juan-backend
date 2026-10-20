import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCompanyIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_about_company_introductions';
  info: {
    displayName: 'Company Introduction';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<'about.highlight-item', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutHighlightItem extends Struct.ComponentSchema {
  collectionName: 'components_about_highlight_items';
  info: {
    displayName: 'Highlight Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface AboutPhilosophyCard extends Struct.ComponentSchema {
  collectionName: 'components_about_philosophy_cards';
  info: {
    displayName: 'Philosophy Card';
  };
  attributes: {
    bulletColor: Schema.Attribute.String;
    bullets: Schema.Attribute.Component<'shared.list-items', true>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface AboutPhilosophySection extends Struct.ComponentSchema {
  collectionName: 'components_about_philosophy_sections';
  info: {
    displayName: 'Philosophy Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'about.philosophy-card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutStatistic extends Struct.ComponentSchema {
  collectionName: 'components_about_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    value: Schema.Attribute.Integer;
  };
}

export interface BlogBlogTag extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_tags';
  info: {
    displayName: 'Blog Tag';
  };
  attributes: {
    IsActive: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    Order: Schema.Attribute.Integer;
  };
}

export interface BlogNewTag extends Struct.ComponentSchema {
  collectionName: 'components_blog_new_tags';
  info: {
    displayName: 'NewTag';
    icon: 'attachment';
  };
  attributes: {
    IsActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Order: Schema.Attribute.Integer;
  };
}

export interface ContactMap extends Struct.ComponentSchema {
  collectionName: 'components_contact_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    Latitude: Schema.Attribute.Decimal;
    Longitude: Schema.Attribute.Decimal;
    MapTitle: Schema.Attribute.String;
    Zoom: Schema.Attribute.Integer;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    CopyrightText: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    LinkGroups: Schema.Attribute.Component<'footer.footer-link-group', true>;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    social: Schema.Attribute.Component<'shared.social-link', true>;
  };
}

export interface FooterFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_link_groups';
  info: {
    displayName: 'Footer Link Group';
  };
  attributes: {
    IsActive: Schema.Attribute.Boolean;
    Links: Schema.Attribute.Component<'shared.navigation-item', true>;
    Order: Schema.Attribute.Integer;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialIcons extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_icons';
  info: {
    displayName: 'social icons';
    icon: 'house';
  };
  attributes: {
    IsActive: Schema.Attribute.Boolean;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Platform: Schema.Attribute.Enumeration<
      [
        'YouTube',
        'Facebook',
        'Instagram',
        'TikTok',
        'LinkedIn',
        'X',
        'Snapchat',
      ]
    >;
    Url: Schema.Attribute.String;
  };
}

export interface HomeFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    jobstags: Schema.Attribute.Component<'blog.blog-tag', true>;
    location: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface HomeFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.feature-card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    eyebroww: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    titleLine1: Schema.Attribute.String;
    titleLine2: Schema.Attribute.Text;
  };
}

export interface HomeLatestProjects extends Struct.ComponentSchema {
  collectionName: 'components_home_latest_projects';
  info: {
    displayName: 'Latest Projects';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Eyebrow: Schema.Attribute.String;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    Title: Schema.Attribute.String;
    ViewAllButton: Schema.Attribute.Component<'shared.cta-button', false>;
  };
}

export interface HomeMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_home_marquee_items';
  info: {
    displayName: 'Marquee Item';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean;
    order: Schema.Attribute.Integer;
    text: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_uses';
  info: {
    displayName: 'Why Choose Us';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.feature-card', true>;
    description: Schema.Attribute.Text;
    eyebroww: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface JobBenefit extends Struct.ComponentSchema {
  collectionName: 'components_job_benefits';
  info: {
    displayName: 'Benefit';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    IsActive: Schema.Attribute.Boolean;
    Order: Schema.Attribute.Integer;
    Title: Schema.Attribute.String;
  };
}

export interface JobBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_job_benefits_sections';
  info: {
    displayName: 'Benefits Section';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'job.benefit', true>;
    BenefitsDescription: Schema.Attribute.Blocks;
    BenefitsSectionLabel: Schema.Attribute.String;
    BenefitsTitle: Schema.Attribute.String;
  };
}

export interface PortfolioDetailsGallery extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_details_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PortfolioDetailsHowToPlay extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_details_how_to_plays';
  info: {
    displayName: 'How To Play';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    SectionLabel: Schema.Attribute.String;
  };
}

export interface PortfolioDetailsOverview extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_details_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    SectionLabel: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface PortfolioDetailsProjectDownloadLink
  extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_details_project_download_links';
  info: {
    displayName: 'Project Download Link';
  };
  attributes: {
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    IsActive: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    OpenNewTab: Schema.Attribute.Boolean;
    Order: Schema.Attribute.Integer;
    URL: Schema.Attribute.String;
  };
}

export interface PortfolioDetailsProjectTag extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_details_project_tags';
  info: {
    displayName: 'Project Tag';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    IsActive: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    Order: Schema.Attribute.Integer;
    shareapp: Schema.Attribute.String;
  };
}

export interface PortfolioPortfolioCategory extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_portfolio_categories';
  info: {
    displayName: 'Portfolio Category';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PortfolioPortfolioItems extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_portfolio_items';
  info: {
    displayName: 'Portfolio Items';
  };
  attributes: {
    category: Schema.Attribute.String;
    IsActivee: Schema.Attribute.Boolean;
    Orderr: Schema.Attribute.Integer;
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
    ViewDetailsLabel: Schema.Attribute.String;
  };
}

export interface ProjectTechnology extends Struct.ComponentSchema {
  collectionName: 'components_project_technologies';
  info: {
    displayName: 'Technology';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ServicesFeaturedProject extends Struct.ComponentSchema {
  collectionName: 'components_services_featured_projects';
  info: {
    displayName: 'Featured Project';
  };
  attributes: {
    CTAButtons: Schema.Attribute.Component<'shared.cta-button', true>;
    Description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_services_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    IsActive: Schema.Attribute.Boolean;
    OpenNewTab: Schema.Attribute.Boolean;
    Order: Schema.Attribute.Integer;
    Title: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface ServicesServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_services_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    Services: Schema.Attribute.Component<'services.service-item', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedCollaborationCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_collaboration_ctas';
  info: {
    displayName: 'Collaboration CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    EmailLabel: Schema.Attribute.String;
    EmailPlaceholder: Schema.Attribute.String;
    FullNameLabel: Schema.Attribute.String;
    FullNamePlaceholder: Schema.Attribute.String;
    MessageLabel: Schema.Attribute.String;
    MessagePlaceholder: Schema.Attribute.String;
    PhoneLabel: Schema.Attribute.String;
    PhonePlaceholder: Schema.Attribute.String;
    SubjectLabel: Schema.Attribute.String;
    SubjectOptions: Schema.Attribute.Enumeration<['General Inquiry']>;
    SubmitButton: Schema.Attribute.Component<'shared.cta-button', false>;
  };
}

export interface SharedContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_informations';
  info: {
    displayName: 'ContactInformation';
  };
  attributes: {
    Address: Schema.Attribute.Text;
    ContactForm: Schema.Attribute.Component<'shared.contact-form', false>;
    Description: Schema.Attribute.Text;
    Email: Schema.Attribute.Email;
    Items: Schema.Attribute.Component<'shared.contact-item', true>;
    Phone: Schema.Attribute.Integer;
    SectionLabel: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedContactItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_items';
  info: {
    displayName: 'Contact Item';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    IsActive: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Order: Schema.Attribute.Integer;
    Type: Schema.Attribute.Enumeration<['PHONE', 'EMAIL', 'ADDRESS']>;
  };
}

export interface SharedContactSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    errorMessage: Schema.Attribute.String;
    eyebrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    successMessage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    openNewTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.Text;
    variant: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    titleone: Schema.Attribute.String;
    titletwo: Schema.Attribute.String;
  };
}

export interface SharedListItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'List items';
  };
  attributes: {
    bullets: Schema.Attribute.String;
  };
}

export interface SharedNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_items';
  info: {
    displayName: 'Navigation Item';
  };
  attributes: {
    IsActive: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    OpenNewTab: Schema.Attribute.Boolean;
    Order: Schema.Attribute.Integer;
    URL: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconn: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean;
    order: Schema.Attribute.Integer;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.company-introduction': AboutCompanyIntroduction;
      'about.hero': AboutHero;
      'about.highlight-item': AboutHighlightItem;
      'about.philosophy-card': AboutPhilosophyCard;
      'about.philosophy-section': AboutPhilosophySection;
      'about.statistic': AboutStatistic;
      'blog.blog-tag': BlogBlogTag;
      'blog.new-tag': BlogNewTag;
      'contact.map': ContactMap;
      'footer.footer': FooterFooter;
      'footer.footer-link-group': FooterFooterLinkGroup;
      'footer.social-icons': FooterSocialIcons;
      'home.feature-card': HomeFeatureCard;
      'home.feature-section': HomeFeatureSection;
      'home.hero': HomeHero;
      'home.latest-projects': HomeLatestProjects;
      'home.marquee-item': HomeMarqueeItem;
      'home.why-choose-us': HomeWhyChooseUs;
      'job.benefit': JobBenefit;
      'job.benefits-section': JobBenefitsSection;
      'portfolio-details.gallery': PortfolioDetailsGallery;
      'portfolio-details.how-to-play': PortfolioDetailsHowToPlay;
      'portfolio-details.overview': PortfolioDetailsOverview;
      'portfolio-details.project-download-link': PortfolioDetailsProjectDownloadLink;
      'portfolio-details.project-tag': PortfolioDetailsProjectTag;
      'portfolio.portfolio-category': PortfolioPortfolioCategory;
      'portfolio.portfolio-items': PortfolioPortfolioItems;
      'project.technology': ProjectTechnology;
      'services.featured-project': ServicesFeaturedProject;
      'services.service-item': ServicesServiceItem;
      'services.services-section': ServicesServicesSection;
      'shared.collaboration-cta': SharedCollaborationCta;
      'shared.contact-form': SharedContactForm;
      'shared.contact-information': SharedContactInformation;
      'shared.contact-item': SharedContactItem;
      'shared.contact-section': SharedContactSection;
      'shared.cta-button': SharedCtaButton;
      'shared.hero': SharedHero;
      'shared.list-items': SharedListItems;
      'shared.navigation-item': SharedNavigationItem;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
