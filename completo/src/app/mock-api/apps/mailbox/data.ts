/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const folders = [
    {
        id: '7c004a19-4506-48ef-93ab-f16381302e3b',
        title: 'Enviadas',
        slug: 'inbox',
        icon: 'heroicons_outline:paper-airplane',
    },
    {
        id: '1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0',
        title: 'Finalizadas',
        slug: 'sent',
        icon: 'heroicons_outline:inbox',
    },
    {
        id: 'fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5',
        title: 'Canceladas',
        slug: 'drafts',
        icon: 'heroicons_outline:trash',
    },
];
export const filters = [
    {
        id: 'de1b41f6-6839-4f1b-9d2c-07e55f6f8f82',
        title: 'Starred',
        slug: 'starred',
        icon: 'heroicons_outline:star',
    },
    {
        id: '71bba1ec-a90e-4a71-9932-4bab0a99aa1c',
        title: 'Important',
        slug: 'important',
        icon: 'heroicons_outline:exclamation-circle',
    },
];
export const labels = [
    {
        id: 'b167d3c4-f6ed-4ea6-9579-a12f95a9d76e',
        title: 'Solicitado',
        slug: 'personal',
        color: 'blue',
    },
    {
        id: '745cf30e-ca84-47a1-a553-b70eb630d8e7',
        title: 'En proceso de atención',
        slug: 'work',
        color: 'indigo',
    },
    {
        id: '8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3',
        title: 'Devuelto',
        slug: 'payments',
        color: 'red',
    },
    {
        id: 'b2d1e4e7-7cfd-4b51-ae59-217a093df754',
        title: 'Reasignado',
        slug: 'invoices',
        color: 'teal',
    },
    {
        id: '184cd689-4ee4-47cf-9f8a-12233d614326',
        title: 'Cancelado',
        slug: 'accounts',
        color: 'purple',
    },
    {
        id: 'b67fc437-6118-4ec8-a3c7-9320b828e3fc',
        title: 'Finalizado',
        slug: 'forums',
        color: 'green',
    },
];
export const settings = {
    messageLayout: 'right',
};
export const mails = [
    {
        id: "f389cf89-8eac-43fb-b2b9-70b1e50d4e63",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Luis Fernandez <luis.fernandez@company.com>", "Maria Gonzalez <maria.gonzalez@company.com>"],
        bcc: ["Jorge Ruiz <jorge.ruiz@company.com>", "Elena Morales <elena.morales@company.com>"],
        date: new Date('Mon Dec 31 2018 15:30:00 GMT+0000 (UTC)').toISOString(),
        subject: "Solicitud de ingreso de formulario del Registro Social",
        content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
        attachments: [],
        starred: true,
        important: true,
        unread: false,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["b2d1e4e7-7cfd-4b51-ae59-217a093df754"]
    },
    {
        id: "a67c56bc-d0f7-49f3-bc93-b042f3b28233",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Victor Alvarez <victor.alvarez@company.com>", "Laura Diaz <laura.diaz@company.com>"],
        bcc: ["Roberto Soto <roberto.soto@company.com>", "Catalina Perez <catalina.perez@company.com>"],
        date: new Date('Mon Dec 31 2018 11:00:00 GMT+0000 (UTC)').toISOString(),
        subject: "Solicitud de Actualización de datos del formulario de Registro Social",
        content: "Hi Brian,\n\nQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nCheers!\nUnidad del registro social",
        attachments: [],
        starred: false,
        important: false,
        unread: true,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
    },
    {
        id: "fbd5cc98-d72e-49d4-9930-06a1a99ec601",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Carlos Torres <carlos.torres@company.com>", "Sofia Martinez <sofia.martinez@company.com>"],
        bcc: ["Eva Lopez <eva.lopez@company.com>", "Miguel Perez <miguel.perez@company.com>"],
        date: new Date('Mon Dec 31 2018 17:45:00 GMT+0000 (UTC)').toISOString(),
        subject: "Solicitud de pertenecer a un nuevo núcleo familiar",
        content: "Hi Brian,\n\nUllamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est dolor minim exercitation deserunt quis duis fugiat ipsum incididunt non. Anim aute ipsum cupidatat nisi occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa quis veniam nisi exercitation veniam ut. Quis do sint proident fugiat ad.\n\nNon id nisi commodo veniam. Veniam veniam minim ea laborum voluptate id duis deserunt. Anim ut ut amet et ullamco nulla fugiat id incididunt adipisicing excepteur amet.\n\nCheers!\nUnidad del registro social",
        attachments: [],
        starred: true,
        important: true,
        unread: false,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
    },
    {
        id: "92b3ac9d-e2c7-4ecf-bdfe-e1c23a7b3c58",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Pedro Garcia <pedro.garcia@company.com>", "Lucia Gomez <lucia.gomez@company.com>"],
        bcc: ["Marcos Ruiz <marcos.ruiz@company.com>", "Ana Ramos <ana.ramos@company.com>"],
        date: new Date('Mon Dec 31 2018 14:30:00 GMT+0000 (UTC)').toISOString(),
        subject: "Solicitud de reclamo de porcentaje de pobreza",
        content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
        attachments: [],
        starred: false,
        important: true,
        unread: true,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
    },
    {
        id: "d412ced9-4595-4633-94f1-c8bc720606a5",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Carlos Torres <carlos.torres@company.com>", "Sofia Martinez <sofia.martinez@company.com>"],
        bcc: ["Eva Lopez <eva.lopez@company.com>", "Miguel Perez <miguel.perez@company.com>"],
        date: new Date('Mon Dec 31 2018 08:30:00 GMT+0000 (UTC)').toISOString(),
        subject: "Solicitud de información para acceder a información del Registro social",
        content: "Hi Brian,\n\nNulla facilisi. Vivamus sit amet tristique orci. Morbi malesuada urna sit amet orci volutpat, a ullamcorper nunc auctor. Nunc fringilla dui et sem fringilla, non tincidunt metus vestibulum. Etiam ut sapien ac risus condimentum interdum.\n\nCheers!\nUnidad del registro social",
        attachments: [],
        starred: true,
        important: false,
        unread: false,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["184cd689-4ee4-47cf-9f8a-12233d614326"]
    },
    {
        id: "5c83f87d-6e72-4e73-9f83-e4b5ff1ab7b8",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Victor Alvarez <victor.alvarez@company.com>", "Laura Diaz <laura.diaz@company.com>"],
        bcc: ["Roberto Soto <roberto.soto@company.com>", "Catalina Perez <catalina.perez@company.com>"],
        date: new Date('Mon Dec 31 2018 17:00:00 GMT+0000 (UTC)').toISOString(),
        subject: "Solicitud de certificado de haber registrado el formulario del Registro Social",
        content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
        attachments: [],
        starred: true,
        important: false,
        unread: true,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["b67fc437-6118-4ec8-a3c7-9320b828e3fc"]
    },
    
        {
            id: "f389cf89-8eac-43fb-b2b9-70b1e50d4e63",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Luis Fernandez <luis.fernandez@company.com>", "Maria Gonzalez <maria.gonzalez@company.com>"],
            bcc: ["Jorge Ruiz <jorge.ruiz@company.com>", "Elena Morales <elena.morales@company.com>"],
            date: new Date('Mon Dec 31 2018 15:30:00 GMT+0000 (UTC)').toISOString(),
            subject: "Solicitud de ingreso de formulario del Registro Social",
            content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
            attachments: [],
            starred: true,
            important: true,
            unread: false,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["b2d1e4e7-7cfd-4b51-ae59-217a093df754"]
        },
        {
            id: "a67c56bc-d0f7-49f3-bc93-b042f3b28233",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Victor Alvarez <victor.alvarez@company.com>", "Laura Diaz <laura.diaz@company.com>"],
            bcc: ["Roberto Soto <roberto.soto@company.com>", "Catalina Perez <catalina.perez@company.com>"],
            date: new Date('Mon Dec 31 2018 11:00:00 GMT+0000 (UTC)').toISOString(),
            subject: "Solicitud de Actualización de datos del formulario de Registro Social",
            content: "Hi Brian,\n\nQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nCheers!\nUnidad del registro social",
            attachments: [],
            starred: false,
            important: false,
            unread: true,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
        },
        {
            id: "fbd5cc98-d72e-49d4-9930-06a1a99ec601",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Carlos Torres <carlos.torres@company.com>", "Sofia Martinez <sofia.martinez@company.com>"],
            bcc: ["Eva Lopez <eva.lopez@company.com>", "Miguel Perez <miguel.perez@company.com>"],
            date: new Date('Mon Dec 31 2018 17:45:00 GMT+0000 (UTC)').toISOString(),
            subject: "Solicitud de pertenecer a un nuevo núcleo familiar",
            content: "Hi Brian,\n\nUllamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est dolor minim exercitation deserunt quis duis fugiat ipsum incididunt non. Anim aute ipsum cupidatat nisi occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa quis veniam nisi exercitation veniam ut. Quis do sint proident fugiat ad.\n\nNon id nisi commodo veniam. Veniam veniam minim ea laborum voluptate id duis deserunt. Anim ut ut amet et ullamco nulla fugiat id incididunt adipisicing excepteur amet.\n\nCheers!\nUnidad del registro social",
            attachments: [],
            starred: true,
            important: true,
            unread: false,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
        },
        {
            id: "92b3ac9d-e2c7-4ecf-bdfe-e1c23a7b3c58",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Pedro Garcia <pedro.garcia@company.com>", "Lucia Gomez <lucia.gomez@company.com>"],
            bcc: ["Marcos Ruiz <marcos.ruiz@company.com>", "Ana Ramos <ana.ramos@company.com>"],
            date: new Date('Mon Dec 31 2018 14:30:00 GMT+0000 (UTC)').toISOString(),
            subject: "Solicitud de reclamo de porcentaje de pobreza",
            content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
            attachments: [],
            starred: false,
            important: true,
            unread: true,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
        },
        {
            id: "d412ced9-4595-4633-94f1-c8bc720606a5",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Carlos Torres <carlos.torres@company.com>", "Sofia Martinez <sofia.martinez@company.com>"],
            bcc: ["Eva Lopez <eva.lopez@company.com>", "Miguel Perez <miguel.perez@company.com>"],
            date: new Date('Mon Dec 31 2018 08:30:00 GMT+0000 (UTC)').toISOString(),
            subject: "Solicitud de información para acceder a información del Registro social",
            content: "Hi Brian,\n\nNulla facilisi. Vivamus sit amet tristique orci. Morbi malesuada urna sit amet orci volutpat, a ullamcorper nunc auctor. Nunc fringilla dui et sem fringilla, non tincidunt metus vestibulum. Etiam ut sapien ac risus condimentum interdum.\n\nCheers!\nUnidad del registro social",
            attachments: [],
            starred: true,
            important: false,
            unread: false,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["184cd689-4ee4-47cf-9f8a-12233d614326"]
        },
        {
            id: "5c83f87d-6e72-4e73-9f83-e4b5ff1ab7b8",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Victor Alvarez <victor.alvarez@company.com>", "Laura Diaz <laura.diaz@company.com>"],
            bcc: ["Roberto Soto <roberto.soto@company.com>", "Catalina Perez <catalina.perez@company.com>"],
            date: new Date('Mon Dec 31 2018 17:00:00 GMT+0000 (UTC)').toISOString(),
            subject: "Solicitud de certificado de haber registrado el formulario del Registro Social",
            content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
            attachments: [],
            starred: true,
            important: true,
            unread: false,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["b67fc437-6118-4ec8-a3c7-9320b828e3fc"]
        },
        
            {
                id: "a3c54b32-4c57-4e50-b2a9-9b13e3d39be4",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Luis Fernandez <luis.fernandez@company.com>", "Maria Gonzalez <maria.gonzalez@company.com>"],
                bcc: ["Jorge Ruiz <jorge.ruiz@company.com>", "Elena Morales <elena.morales@company.com>"],
                date: new Date('Mon Dec 31 2018 15:30:00 GMT+0000 (UTC)').toISOString(),
                subject: "Solicitud de ingreso de formulario del Registro Social",
                content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
                attachments: [],
                starred: true,
                important: true,
                unread: false,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["b2d1e4e7-7cfd-4b51-ae59-217a093df754"]
            },
            {
                id: "c56fd9f5-5c26-4977-9135-e92977e93565",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Victor Alvarez <victor.alvarez@company.com>", "Laura Diaz <laura.diaz@company.com>"],
                bcc: ["Roberto Soto <roberto.soto@company.com>", "Catalina Perez <catalina.perez@company.com>"],
                date: new Date('Mon Dec 31 2018 11:00:00 GMT+0000 (UTC)').toISOString(),
                subject: "Solicitud de Actualización de datos del formulario de Registro Social",
                content: "Hi Brian,\n\nQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nCheers!\nUnidad del registro social",
                attachments: [],
                starred: false,
                important: false,
                unread: true,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
            },
            {
                id: "c8db8fcf-17e1-48b2-9d62-121287f4647b",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Carlos Torres <carlos.torres@company.com>", "Sofia Martinez <sofia.martinez@company.com>"],
                bcc: ["Eva Lopez <eva.lopez@company.com>", "Miguel Perez <miguel.perez@company.com>"],
                date: new Date('Mon Dec 31 2018 17:45:00 GMT+0000 (UTC)').toISOString(),
                subject: "Solicitud de pertenecer a un nuevo núcleo familiar",
                content: "Hi Brian,\n\nUllamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est dolor minim exercitation deserunt quis duis fugiat ipsum incididunt non. Anim aute ipsum cupidatat nisi occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa quis veniam nisi exercitation veniam ut. Quis do sint proident fugiat ad.\n\nNon id nisi commodo veniam. Veniam veniam minim ea laborum voluptate id duis deserunt. Anim ut ut amet et ullamco nulla fugiat id incididunt adipisicing excepteur amet.\n\nCheers!\nUnidad del registro social",
                attachments: [],
                starred: true,
                important: true,
                unread: false,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
            },
            {
                id: "3d956c12-b993-4c72-b0e1-e2d54d4d6a0e",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Pedro Garcia <pedro.garcia@company.com>", "Lucia Gomez <lucia.gomez@company.com>"],
                bcc: ["Marcos Ruiz <marcos.ruiz@company.com>", "Ana Ramos <ana.ramos@company.com>"],
                date: new Date('Mon Dec 31 2018 14:30:00 GMT+0000 (UTC)').toISOString(),
                subject: "Solicitud de reclamo de porcentaje de pobreza",
                content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
                attachments: [],
                starred: false,
                important: true,
                unread: true,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
            },
            {
                id: "d3d91de3-b0c0-4ff4-8262-b3474db8eb6a",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Carlos Torres <carlos.torres@company.com>", "Sofia Martinez <sofia.martinez@company.com>"],
                bcc: ["Eva Lopez <eva.lopez@company.com>", "Miguel Perez <miguel.perez@company.com>"],
                date: new Date('Mon Dec 31 2018 08:30:00 GMT+0000 (UTC)').toISOString(),
                subject: "Solicitud de información para acceder a información del Registro social",
                content: "Hi Brian,\n\nNulla facilisi. Vivamus sit amet tristique orci. Morbi malesuada urna sit amet orci volutpat, a ullamcorper nunc auctor. Nunc fringilla dui et sem fringilla, non tincidunt metus vestibulum. Etiam ut sapien ac risus condimentum interdum.\n\nCheers!\nUnidad del registro social",
                attachments: [],
                starred: true,
                important: false,
                unread: false,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["184cd689-4ee4-47cf-9f8a-12233d614326"]
            },
            {
                id: "82bdf540-d2ea-4d16-a08f-d4b3a11eaff9",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Victor Alvarez <victor.alvarez@company.com>", "Laura Diaz <laura.diaz@company.com>"],
                bcc: ["Roberto Soto <roberto.soto@company.com>", "Catalina Perez <catalina.perez@company.com>"],
                date: new Date('Mon Dec 31 2018 17:00:00 GMT+0000 (UTC)').toISOString(),
                subject: "Solicitud de certificado de haber registrado el formulario del Registro Social",
                content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
                attachments: [],
                starred: false,
                important: true,
                unread: true,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["b67fc437-6118-4ec8-a3c7-9320b828e3fc"]
            },
            
                {
                    id: "d4b5f6f5-32e4-43c9-89d1-34d97a5d67e7",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Santiago Ruiz <santiago.ruiz@company.com>", "Marcela Gutierrez <marcela.gutierrez@company.com>"],
                    bcc: ["Carlos Lopez <carlos.lopez@company.com>", "Sofia Torres <sofia.torres@company.com>"],
                    date: new Date('Mon Dec 31 2018 09:15:00 GMT+0000 (UTC)').toISOString(),
                    subject: "Solicitud de ingreso de formulario del Registro Social",
                    content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
                    attachments: [],
                    starred: false,
                    important: true,
                    unread: false,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
                },
                {
                    id: "cb2f2649-7e1f-43ec-97ae-dfc4a0625b09",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Gerardo Rios <gerardo.rios@company.com>", "Rita Vasquez <rita.vasquez@company.com>"],
                    bcc: ["Marta Jimenez <marta.jimenez@company.com>", "Isabel Cruz <isabel.cruz@company.com>"],
                    date: new Date('Mon Dec 31 2018 13:30:00 GMT+0000 (UTC)').toISOString(),
                    subject: "Solicitud de Actualización de datos del formulario de Registro Social",
                    content: "Hi Brian,\n\nQuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nCheers!\nUnidad del registro social",
                    attachments: [],
                    starred: true,
                    important: false,
                    unread: true,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
                },
                {
                    id: "e2d88e65-c91d-42a1-8537-fb017f34bfa8",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Pablo Herrera <pablo.herrera@company.com>", "Ana Gutierrez <ana.gutierrez@company.com>"],
                    bcc: ["Antonio Gomez <antonio.gomez@company.com>", "Felipe Martinez <felipe.martinez@company.com>"],
                    date: new Date('Mon Dec 31 2018 16:00:00 GMT+0000 (UTC)').toISOString(),
                    subject: "Solicitud de pertenecer a un nuevo núcleo familiar",
                    content: "Hi Brian,\n\nNulla facilisi. Vivamus sit amet tristique orci. Morbi malesuada urna sit amet orci volutpat, a ullamcorper nunc auctor. Nunc fringilla dui et sem fringilla, non tincidunt metus vestibulum. Etiam ut sapien ac risus condimentum interdum.\n\nCheers!\nUnidad del registro social",
                    attachments: [],
                    starred: true,
                    important: true,
                    unread: false,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["b67fc437-6118-4ec8-a3c7-9320b828e3fc"]
                },
                {
                    id: "f129cae0-5f5d-4f8e-a6cd-ccbe8f76ff92",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Ricardo Soto <ricardo.soto@company.com>", "Olivia Romero <olivia.romero@company.com>"],
                    bcc: ["Victor Fernandez <victor.fernandez@company.com>", "Elena Tovar <elena.tovar@company.com>"],
                    date: new Date('Mon Dec 31 2018 18:00:00 GMT+0000 (UTC)').toISOString(),
                    subject: "Solicitud de reclamo de porcentaje de pobreza",
                    content: "Hi Brian,\n\nUllamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est dolor minim exercitation deserunt quis duis fugiat ipsum incididunt non. Anim aute ipsum cupidatat nisi occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa quis veniam nisi exercitation veniam ut. Quis do sint proident fugiat ad.\n\nNon id nisi commodo veniam. Veniam veniam minim ea laborum voluptate id duis deserunt. Anim ut ut amet et ullamco nulla fugiat id incididunt adipisicing excepteur amet.\n\nCheers!\nUnidad del registro social",
                    attachments: [],
                    starred: true,
                    important: false,
                    unread: true,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
                },
                {
                    id: "ad2a6b63-3b7d-47f7-b1d5-4b187697a413",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Carlos Gonzalez <carlos.gonzalez@company.com>", "Sandra Perez <sandra.perez@company.com>"],
                    bcc: ["Luis Torres <luis.torres@company.com>", "Manuela Herrera <manuela.herrera@company.com>"],
                    date: new Date('Mon Dec 31 2018 10:00:00 GMT+0000 (UTC)').toISOString(),
                    subject: "Solicitud de información para acceder a información del Registro social",
                    content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
                    attachments: [],
                    starred: false,
                    important: true,
                    unread: false,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["184cd689-4ee4-47cf-9f8a-12233d614326"]
                },
                {
                    id: "c0c5ab6f-37d9-4bfc-bfcd-f64d79e98444",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["David Ruiz <david.ruiz@company.com>", "Luz Gonzalez <luz.gonzalez@company.com>"],
                    bcc: ["Ramiro Jimenez <ramiro.jimenez@company.com>", "Nadia Garcia <nadia.garcia@company.com>"],
                    date: new Date('Mon Dec 31 2018 12:30:00 GMT+0000 (UTC)').toISOString(),
                    subject: "Solicitud de certificado de haber registrado el formulario del Registro Social",
                    content: "Hi Brian,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nMauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae mauris non felis mollis faucibus. Ut diam neque, interdum eget, malesuada et, lacinia vitae, sapien.\n\nCheers!\nUnidad del registro social",
                    attachments: [],
                    starred: false,
                    important: false,
                    unread: true,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
                }
            
            
        
    
];
