
const collections = [
    {value: 'caseStudies', label: 'Case studies'},
    {value: 'connections', label: 'Connections'},
    {value: 'ebooks', label: 'Ebooks'},
    {value: 'landingPages', label: 'Landing pages'},
    {value: 'partners', label: 'Partners'},

]

const pages = (collectionId) => {
    return {
        folder: `content/collections/${collectionId}`,
        create: true,
        slug: "{{fields.slug}}",
        preview_path: "/{{fields.slug}}",
        editor: {preview: true},
        filter: {field: "type", value: collectionId},
        fields: [
            {label: "Title", name: "title", widget: "string"},
            {label: "Description", name: "description", widget: "string"},
            {label: "Slug", name: "slug", widget: "string", pattern: ['^[a-z0-9-/]*$', "Only letters, numbers and -"]},
            {
                label: "Type",
                name: "type",
                widget: "select",
                options: collections,
                default: collectionId
            },
            {
                label: "Sections",
                name: "sections",
                widget: "list",
                types: [
                    {
                        label: "Connections", name: "Connections", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string", default: 'Connections'},
                            {
                                label: "Items", name: "items", widget: "list", fields: [
                                    {label: "Image", name: "image", widget: "image"},
                                    {label: "Image Alt", name: "imageAlt", widget: "string", required: false},
                                    {label: "Image Title", name: "imageTitle", widget: "string", required: false},
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {label: 'Link', name: 'link', widget: 'string', required: false},
                                    {label: 'New badge', name: 'new', widget: 'boolean', default: false, required: false}
                                ]
                            }
                        ]
                    },
                    {
                        label: "CTA", name: "CTA", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: 'Title', name: "title", widget: "string", default: 'Title here'},
                            {
                                label: "Button", name: "button", widget: "object", fields: [
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {label: 'HREF', name: 'href', widget: 'string', required: false},
                                    {label: 'New tab', name: 'newTab', widget: 'boolean', default: false, required: false},
                                ]
                            },
                        ]
                    },
                    {
                        label: "Form", name: "Form", widget: "object", fields: [
                            {label: "Form ID", name: "formId", widget: "string", default: "form", required: false},
                            {label: "Title", name: "title", widget: "string", default: "title here"},
                            {label: "Subtitle", name: "subtitle", widget: "string", default: "subtititle here", required: false},
                            {label: "Header", name: "header", widget: "string", default: "form header"},
                            {
                                label: "Background color",
                                name: "bgColor",
                                widget: "color",
                                allowInput: true,
                                default: "#11a59c",
                                required: false
                            },
                            {label: 'Link Text', name: 'linkText', widget: 'string', required: false},
                            {label: 'Link URL', name: 'linkUrl', widget: 'string', required: false},
                        ]
                    },
                    {
                        label: "Force24", name: "Force24", widget: "object", fields: [
                            {label: "Title", name: "title", widget: "string", default: "title here"},
                            {label: "Subtitle", name: "subtitle", widget: "string", default: "subtititle here", required: false},
                            {label: "Header", name: "header", widget: "string", default: "form header"},
                            {
                                label: "Background color",
                                name: "bgColor",
                                widget: "color",
                                allowInput: true,
                                default: "#11a59c",
                                required: false
                            },
                            {label: 'Force24 ID', name: 'forceid', widget: 'string', required: true},
                        ]
                    },
                    {
                        label: "Features", name: "Features", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string"},
                            {label: "Body", name: "body", widget: "markdown"},
                            {label: "Image", name: "image", widget: "image"},
                            {label: "Image Alt", name: "imageAlt", widget: "string", required: false},
                            {label: "Image Title", name: "imageTitle", widget: "string", required: false},
                            {label: "Image Position", name: "imagePosition", widget: "select", options: ["left", "right"], default: "left"},
                            {
                                label: "Button", name: "button", widget: "object", fields: [
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {label: 'Link', name: 'link', widget: 'string', required: false},
                                    {label: 'New tab', name: 'newTab', widget: 'boolean', default: false, required: false},
                                ]
                            },
                        ]
                    },
                    {
                        label: "Gallery", name: "Gallery", widget: "object", summary: "{{fields.title}}", fields: [
                            {
                                label: "Content",
                                name: "content",
                                collection: "galleries",
                                value_field: "title",
                                search_fields: ["title"],
                                display_fields: ["title"],
                                widget: "relation",
                                required: false
                            },
                            {label: "Title", name: "title", widget: "string", required: false},
                            {label: 'Extra text', name: 'text', widget: 'markdown', required: false},
                            {
                                label: "Items", name: "items", widget: "list", fields: [
                                    {label: "Image", name: "image", widget: "image"},
                                    {label: "Image Alt", name: "imageAlt", widget: "string", required: false},
                                    {label: "Image Title", name: "imageTitle", widget: "string", required: false},
                                ]
                            }
                        ]
                    },
                    {
                        label: "Hero", name: "Hero", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: 'Title', name: "title", widget: "string", default: 'Title here'},
                            {label: 'Description', name: "description", widget: "string", default: 'Description goes here ...'},
                            {label: 'Photo', name: 'photo', widget: 'image', required: false},
                            {
                                label: 'Text align',
                                name: 'textAlign',
                                widget: "select",
                                options: ["left", "center"],
                                default: "left",
                                required: false
                            },
                            {
                                label: 'Widget theme',
                                name: 'theme',
                                widget: 'select',
                                options: ['brand', 'white'],
                                default: 'brand',
                                required: false
                            },
                            {label: 'Background image', name: 'bgImage', widget: 'image', required: false},
                            {label: 'Scroll icon', name: 'scroll', widget: 'boolean', default: false, required: false},
                            {
                                label: "Main button", name: "mainButton", widget: "object", fields: [
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {label: 'Link', name: 'link', widget: 'string', required: false},
                                    {label: 'New tab', name: 'newTab', widget: 'boolean', default: false, required: false},
                                ]
                            },
                            {
                                label: "Secondary button", name: "secondaryButton", widget: "object", fields: [
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {label: 'Link', name: 'link', widget: 'string', required: false},
                                    {label: 'New tab', name: 'newTab', widget: 'boolean', default: false, required: false},
                                ]
                            },
                        ]
                    },
                    {
                        label: "Link List", name: "LinkList", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title (not displayed)", name: "title", widget: "string", default: 'Link List'},
                            {
                                label: "Columns", name: "columns", widget: "list", fields: [
                                    {label: "Title", name: "title", widget: "string"},
                                    {
                                        label: "Links", name: "links", widget: "list", fields: [
                                            {label: "Name", name: "name", widget: "string"},
                                            {label: "Route", name: "route", widget: "string"},
                                            {label: "Open in new tab", name: "newTab", widget: "boolean", default: false, required: false}
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Paragraphs", name: "Paragraphs", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string"},
                            {label: "Body", name: "body", widget: "markdown"}
                        ]
                    },
                    {
                        label: "Partner Logo", name: "PartnerLogo", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Partner name", name: "title", widget: "string"},
                            {label: "Logo", name: "logo", widget: "image"},
                            {label: "Logo Alt", name: "logoAlt", widget: "string", required: false},
                            {label: "Logo Title", name: "logoTitle", widget: "string", required: false},
                        ]
                    },
                    {
                        label: "Questions", name: "Questions", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string", default: 'FAQs'},
                            {
                                label: "Items", name: "items", widget: "list", fields: [
                                    {label: 'Question', name: 'question', widget: 'string', required: false},
                                    {label: 'Answer', name: 'answer', widget: 'markdown', required: false},
                                ]
                            }
                        ]
                    },
                    {
                        label: "Reviews", name: "Reviews", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string", default: 'Reviews'},
                            {
                                label: 'Display',
                                name: 'display',
                                widget: "select",
                                options: ["default", "wide", "fluid"],
                                default: "default",
                                required: false
                            },
                            {
                                label: "Items", name: "items", widget: "list", fields: [
                                    {label: "Image", name: "image", widget: "image"},
                                    {label: "Image Alt", name: "imageAlt", widget: "string", required: false},
                                    {label: "Image Title", name: "imageTitle", widget: "string", required: false},
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {
                                        label: 'Rating',
                                        name: 'rating',
                                        widget: 'number',
                                        value_type: "int",
                                        required: false,
                                        min: 1,
                                        max: 5,
                                        default: 5
                                    },
                                    {label: 'Link', name: 'link', widget: 'string', required: false},
                                ]
                            }
                        ]
                    },
                    {
                        label: "Showcase", name: "Showcase", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string"},
                            {
                                label: "Items", name: "items", widget: "list", fields: [
                                    {label: "Image", name: "image", widget: "image"},
                                    {label: "Image Alt", name: "imageAlt", widget: "string", required: false},
                                    {label: "Image Title", name: "imageTitle", widget: "string", required: false},
                                    {label: 'Title', name: 'title', widget: 'string', required: false},
                                    {label: 'Text', name: 'text', widget: 'string', required: false},
                                    {label: 'Link Text', name: 'linkText', widget: 'string', required: false},
                                    {label: 'Link URL', name: 'linkUrl', widget: 'string', required: false},
                                ]
                            }
                        ]
                    },
                    {
                        label: "Table", name: "Table", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string", default: 'Table'},
                            {
                                label: "Headers", name: "headers", widget: "list", fields: [
                                    {label: "Text", name: "text", widget: "string"},
                                ]
                            },
                            {
                                label: "Rows", name: "rows", widget: "list", fields: [
                                    {
                                        label: "Cells", name: "cells", widget: "list", fields: [
                                            {label: "Text", name: "text", widget: "string"},
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Video", name: "Video", widget: "object", summary: "{{fields.title}}", fields: [
                            {label: "Title", name: "title", widget: "string"},
                            {label: "Text", name: "text", widget: "markdown"},
                            {label: "Youtube video ID", name: "videoId", widget: "string"},
                        ]
                    },
                ]
            }
        ]
    }
}

const config = {
    cms_manual_init: true,
    backend: {
        name: 'git-gateway',
        repo: 'littledata/public-site-netlify',
        branch: 'main',
        local_backend: true
    },
    media_folder: 'public/img',
    public_folder: 'img',
    site_url: 'https://www2.littledata.io',
    display_url: 'https://www2.littledata.io',
    logo_url: 'https://www2.littledata.io/cms-logo.svg',
    collections: [
        {name: "caseStudies", label: "📘  Case studies", ...pages("caseStudies")},
        {name: "connections", label: "🔌  Connections", ...pages("connections")},
        {name: "ebooks", label: "📚  Ebooks", ...pages("ebooks")},
        {name: "landingPages", label: "📜  Landing pages", ...pages("landingPages")},
        {name: "partners", label: "🤝  Partners", ...pages("partners")},
        {
            name: "galleries",
            label: "🖼️  Galleries",
            folder: "content/galleries",
            create: true,
            editor: {preview: true},
            fields: [
                {label: "Title", name: "title", widget: "string"},
                {label: 'Extra text', name: 'text', widget: 'markdown', required: false},
                {
                    label: "Items", name: "items", widget: "list", fields: [
                        {label: "Image", name: "image", widget: "image"},
                        {label: "Image Alt", name: "imageAlt", widget: "string", required: false},
                        {label: "Image Title", name: "imageTitle", widget: "string", required: false},
                    ]
                }
            ]
        },
        {
            name: "menus", label: "🟰  Menus", editor: {preview: false},
            files: [
                {
                    label: "Header",
                    name: "header",
                    file: "content/menus/header.md",
                    fields: [
                        {
                            label: "Items", name: "items", widget: "list", fields: [
                                {label: "Name", name: "name", widget: "string"},
                                {label: "Route", name: "route", widget: "string", required: false},
                                {label: "Open in new tab", name: "newTab", widget: "boolean", default: false, required: false},
                                {label: "Highlight", name: "highlight", widget: "boolean", default: false, required: false},
                                {
                                    label: "Sub-items", name: "subItems", widget: "list", fields: [
                                        {label: "Name", name: "name", widget: "string"},
                                        {label: "Route", name: "route", widget: "string", required: false},
                                        {label: "Open in new tab", name: "newTab", widget: "boolean", default: false, required: false}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Footer", name: "footer", file: "content/menus/footer.md", fields: [
                        {
                            label: "Sections", name: "sections", widget: "list", fields: [
                                {label: "Name", name: "name", widget: "string"},
                                {
                                    label: "Items", name: "items", widget: "list", fields: [
                                        {label: "Name", name: "name", widget: "string"},
                                        {label: "Route", name: "route", widget: "string"},
                                        {label: "Open in new tab", name: "newTab", widget: "boolean", default: false, required: false}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default config;
