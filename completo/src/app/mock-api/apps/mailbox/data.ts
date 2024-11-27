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
        id: "a1f7d459-4b64-482e-876e-7a493afc9bce",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Ana Morales <ana.morales@company.com>", "Luis Torres <luis.torres@company.com>"],
        bcc: ["Marta Alvarez <marta.alvarez@company.com>", "Daniel Ramirez <daniel.ramirez@company.com>"],
        date: "2019-12-28T15:20:00.000Z",
        subject: "Solicitud #4567: Ingreso de Formulario del Registro Social",
        content: "Estimado Juan, \n\nSu solicitud para el ingreso del formulario de Registro Social está en proceso. Por favor, revise los documentos requeridos y asegúrese de completar los pasos pendientes. \n\nPara continuar, haga clic en el siguiente enlace: (Ingresar Formulario). \n\nAtentamente,\n\nUnidad del Registro Social",
        attachments: [],
        starred: false,
        important: false,
        unread: true,
        folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
        labels: ["67d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
    },
    {
        id: "7fd9e3ba-9077-4c94-92d5-b3f77b6fd924",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Camila Diaz <camila.diaz@company.com>", "Jose Marin <jose.marin@company.com>"],
        bcc: ["Paula Ortiz <paula.ortiz@company.com>", "Esteban Castillo <esteban.castillo@company.com>"],
        date: "2019-12-27T10:45:00.000Z",
        subject: "Solicitud #8934: Actualización de datos del Formulario de Registro Social",
        content: "Estimado Juan, \n\nSu solicitud de actualización de datos del formulario de Registro Social ha sido recibida. En breve, recibirá una notificación para confirmar los cambios realizados. \n\nAgradecemos su colaboración.\n\nAtentamente,\n\nUnidad del Registro Social",
        attachments: [],
        starred: false,
        important: false,
        unread: true,
        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
        labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
    },
    {
        id: "ef679d53-3219-4817-91a5-8c874c6e89dc",
        type: "mail",
        from: {
            contact: "Unidad del registro social <registro.social@company.com>"
        },
        to: "me <hughes.brian@company.com>",
        cc: ["Alejandro Ponce <alejandro.ponce@company.com>", "Lucia Perez <lucia.perez@company.com>"],
        bcc: ["Fernando Ruiz <fernando.ruiz@company.com>", "Carla Rojas <carla.rojas@company.com>"],
        date: "2019-12-26T08:10:00.000Z",
        subject: "Solicitud #1234: Cambio de núcleo familiar",
        content: "Estimado Juan, \n\nLa solicitud para el cambio de núcleo familiar en el Registro Social ha sido aceptada. Por favor, revise los documentos actualizados en el portal en línea. \n\nPuede acceder al enlace aquí: (Acceder a Núcleo Familiar). \n\nAtentamente,\n\nUnidad del Registro Social",
        attachments: [],
        starred: false,
        important: false,
        unread: true,
        folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
        labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
    },
    
        {
            id: "b89f0531-4c2a-497b-873e-6f7db00c450e",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Sofia Martinez <sofia.martinez@company.com>", "Javier Guzman <javier.guzman@company.com>"],
            bcc: ["Carlos Perez <carlos.perez@company.com>", "Andrea Torres <andrea.torres@company.com>"],
            date: "2019-12-24T14:00:00.000Z",
            subject: "Solicitud #3456: Reclamo de porcentaje de pobreza",
            content: "Estimado Juan, \n\nHemos recibido su reclamo respecto al porcentaje de pobreza asignado. Nuestro equipo está revisando la información y le contactará próximamente con una resolución. \n\nGracias por su paciencia.\n\nAtentamente,\n\nUnidad del Registro Social",
            attachments: [],
            starred: false,
            important: false,
            unread: true,
            folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
            labels: ["184cd689-4ee4-47cf-9f8a-12233d614326"]
        },
        {
            id: "3e4dc751-8a56-4c69-b211-79cb9ae703b4",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Paola Rojas <paola.rojas@company.com>", "Diego Vargas <diego.vargas@company.com>"],
            bcc: ["Fernando Jimenez <fernando.jimenez@company.com>", "Carolina Rivera <carolina.rivera@company.com>"],
            date: "2019-12-23T16:30:00.000Z",
            subject: "Solicitud #5678: Información para acceder al Registro Social",
            content: "Estimado Juan, \n\nA continuación, encontrará la información necesaria para acceder al Registro Social. Por favor, asegúrese de tener los documentos requeridos a la mano antes de iniciar el proceso. \n\nPuede acceder aquí: (Acceder a Información). \n\nAtentamente,\n\nUnidad del Registro Social",
            attachments: [],
            starred: false,
            important: false,
            unread: true,
            folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
            labels: ["b2d1e4e7-7cfd-4b51-ae59-217a093df754"]
        },
        {
            id: "6cd3291f-b8a4-40e2-a3f2-f54c1d835e7f",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Laura Navarro <laura.navarro@company.com>", "Juan Hernandez <juan.hernandez@company.com>"],
            bcc: ["Pablo Gutierrez <pablo.gutierrez@company.com>", "Maria Leon <maria.leon@company.com>"],
            date: "2019-12-22T18:45:00.000Z",
            subject: "Solicitud #7890: Certificado de Registro del Formulario del Registro Social",
            content: "Estimado Juan, \n\nSu certificado de Registro Social ha sido generado con éxito. Puede descargarlo utilizando el siguiente enlace: (Descargar Certificado). \n\nGracias por usar nuestro servicio.\n\nAtentamente,\n\nUnidad del Registro Social",
            attachments: [],
            starred: false,
            important: false,
            unread: true,
            folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
            labels: ["b67fc437-6118-4ec8-a3c7-9320b828e3fc"]
        },
        {
            id: "2ef1c7d6-83dc-4574-8cf2-43aeb9a7ed3d",
            type: "mail",
            from: {
                contact: "Unidad del registro social <registro.social@company.com>"
            },
            to: "me <hughes.brian@company.com>",
            cc: ["Victor Salinas <victor.salinas@company.com>", "Elena Montoya <elena.montoya@company.com>"],
            bcc: ["Gabriel Vega <gabriel.vega@company.com>", "Monica Aguilar <monica.aguilar@company.com>"],
            date: "2019-12-21T20:15:00.000Z",
            subject: "Solicitud #3457: Ingreso de Formulario del Registro Social",
            content: "Estimado Juan, \n\nEl ingreso de su formulario ha sido confirmado. Por favor, haga clic en el siguiente enlace para completar el proceso: (Ingresar Formulario). \n\nGracias por su colaboración.\n\nAtentamente,\n\nUnidad del Registro Social",
            attachments: [],
            starred: false,
            important: false,
            unread: true,
            folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
            labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
        },
            {
                id: "8a10f5d3-86b9-4c60-990f-9b2e7e8d5c21",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Ana Lopez <ana.lopez@company.com>", "Luis Mendoza <luis.mendoza@company.com>"],
                bcc: ["Carmen Torres <carmen.torres@company.com>", "Pedro Ramirez <pedro.ramirez@company.com>"],
                date: "2019-12-20T13:00:00.000Z",
                subject: "Solicitud #1289: Actualización de datos del Formulario de Registro Social",
                content: "Estimado Juan, \n\nHemos actualizado los datos de su formulario de Registro Social. Por favor revise la información ingresada y comuníquese con nosotros si encuentra algún error. \n\nGracias por su colaboración.\n\nAtentamente,\n\nUnidad del Registro Social",
                attachments: [],
                starred: false,
                important: false,
                unread: true,
                folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
            },
            {
                id: "4a61d841-f3c2-4b2c-828f-659e02827d52",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Oscar Medina <oscar.medina@company.com>", "Patricia Alvarez <patricia.alvarez@company.com>"],
                bcc: ["Diego Sanchez <diego.sanchez@company.com>", "Laura Ortiz <laura.ortiz@company.com>"],
                date: "2019-12-19T15:15:00.000Z",
                subject: "Solicitud #3541: Cambio de núcleo familiar",
                content: "Estimado Juan, \n\nEl cambio de núcleo familiar en su Registro Social ha sido procesado. Por favor revise los datos para confirmar que todo esté correcto. \n\nGracias por su confianza.\n\nAtentamente,\n\nUnidad del Registro Social",
                attachments: [],
                starred: false,
                important: false,
                unread: true,
                folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
                labels: ["b2d1e4e7-7cfd-4b51-ae59-217a093df754"]
            },
            {
                id: "0fc5d82b-e6b0-4c02-bd6d-0b69e6379b12",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Elena Vargas <elena.vargas@company.com>", "Julio Herrera <julio.herrera@company.com>"],
                bcc: ["Susana Diaz <susana.diaz@company.com>", "Felipe Rios <felipe.rios@company.com>"],
                date: "2019-12-18T11:45:00.000Z",
                subject: "Solicitud #6592: Reclamo de porcentaje de pobreza",
                content: "Estimado Juan, \n\nHemos recibido su reclamo y estamos revisando los detalles del porcentaje asignado. Le notificaremos tan pronto como tengamos una actualización. \n\nGracias por su paciencia.\n\nAtentamente,\n\nUnidad del Registro Social",
                attachments: [],
                starred: false,
                important: false,
                unread: true,
                folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
            },
            {
                id: "2438b2b5-70ab-4b86-9299-02c15c04194c",
                type: "mail",
                from: {
                    contact: "Unidad del registro social <registro.social@company.com>"
                },
                to: "me <hughes.brian@company.com>",
                cc: ["Gabriela Flores <gabriela.flores@company.com>", "Mario Suarez <mario.suarez@company.com>"],
                bcc: ["Nicolas Vargas <nicolas.vargas@company.com>", "Sara Castillo <sara.castillo@company.com>"],
                date: "2019-12-17T19:30:00.000Z",
                subject: "Solicitud #7853: Información para acceder al Registro Social",
                content: "Estimado Juan, \n\nAquí encontrará la información para acceder al Registro Social. Por favor, asegúrese de revisar los requisitos antes de proceder. \n\nPuede consultar la información aquí: (Ver información). \n\nAtentamente,\n\nUnidad del Registro Social",
                attachments: [],
                starred: false,
                important: false,
                unread: true,
                folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
            },
                {
                    id: "9d04e192-4c8c-4d26-9b16-2ecb85f48b27",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Claudia Reyes <claudia.reyes@company.com>", "Hector Silva <hector.silva@company.com>"],
                    bcc: ["Isabel Mendez <isabel.mendez@company.com>", "Jorge Castillo <jorge.castillo@company.com>"],
                    date: "2019-12-16T08:00:00.000Z",
                    subject: "Solicitud #9301: Certificado de Registro del Formulario del Registro Social",
                    content: "Estimado Juan, \n\nEl certificado solicitado está disponible para su descarga. Por favor, utilice el siguiente enlace: (Descargar Certificado). \n\nGracias por confiar en nosotros.\n\nAtentamente,\n\nUnidad del Registro Social",
                    attachments: [],
                    starred: false,
                    important: false,
                    unread: true,
                    folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                    labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
                },
                {
                    id: "c8b738b9-b426-4370-9751-47d7a6fa9f45",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Silvia Romero <silvia.romero@company.com>", "Alfonso Ortega <alfonso.ortega@company.com>"],
                    bcc: ["Adriana Santos <adriana.santos@company.com>", "Luis Vega <luis.vega@company.com>"],
                    date: "2019-12-15T10:15:00.000Z",
                    subject: "Solicitud #3458: Ingreso de Formulario del Registro Social",
                    content: "Estimado Juan, \n\nEl formulario que ingresó ha sido procesado correctamente. Puede verificar los detalles y continuar con los pasos requeridos aquí: (Ver detalles). \n\nGracias por su cooperación.\n\nAtentamente,\n\nUnidad del Registro Social",
                    attachments: [],
                    starred: false,
                    important: false,
                    unread: true,
                    folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
                    labels: ["b2d1e4e7-7cfd-4b51-ae59-217a093df754"]
                },
                {
                    id: "4dfec8c4-13c1-4eb6-a9e4-cc66a45f3bb6",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Enrique Alvarez <enrique.alvarez@company.com>", "Marina Gutierrez <marina.gutierrez@company.com>"],
                    bcc: ["Luis Ramos <luis.ramos@company.com>", "Clara Jimenez <clara.jimenez@company.com>"],
                    date: "2019-12-14T14:30:00.000Z",
                    subject: "Solicitud #4502: Actualización de datos del Formulario de Registro Social",
                    content: "Estimado Juan, \n\nSe han actualizado exitosamente los datos de su formulario. Por favor, revise la nueva información ingresada y confirme su validez. \n\nGracias por colaborar con nuestro equipo.\n\nAtentamente,\n\nUnidad del Registro Social",
                    attachments: [],
                    starred: false,
                    important: false,
                    unread: true,
                    folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                    labels: ["b167d3c4-f6ed-4ea6-9579-a12f95a9d76e"]
                },
                {
                    id: "51a92712-67d7-4d32-82cd-9d37d79f7075",
                    type: "mail",
                    from: {
                        contact: "Unidad del registro social <registro.social@company.com>"
                    },
                    to: "me <hughes.brian@company.com>",
                    cc: ["Ricardo Vargas <ricardo.vargas@company.com>", "Luisa Morales <luisa.morales@company.com>"],
                    bcc: ["Angela Paredes <angela.paredes@company.com>", "Carlos Diaz <carlos.diaz@company.com>"],
                    date: "2019-12-13T16:45:00.000Z",
                    subject: "Solicitud #6583: Cambio de núcleo familiar",
                    content: "Estimado Juan, \n\nEl cambio de núcleo familiar ha sido aprobado y actualizado en su Registro Social. Si tiene preguntas adicionales, no dude en contactarnos. \n\nGracias por utilizar nuestro servicio.\n\nAtentamente,\n\nUnidad del Registro Social",
                    attachments: [],
                    starred: false,
                    important: false,
                    unread: true,
                    folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                    labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
                },
                    {
                        id: "0e42a27d-4b0b-4ab5-b702-bc9e246e716b",
                        type: "mail",
                        from: {
                            contact: "Unidad del registro social <registro.social@company.com>"
                        },
                        to: "me <hughes.brian@company.com>",
                        cc: ["Manuel Torres <manuel.torres@company.com>", "Cecilia Ruiz <cecilia.ruiz@company.com>"],
                        bcc: ["Arturo Guzman <arturo.guzman@company.com>", "Lucia Ramos <lucia.ramos@company.com>"],
                        date: "2019-12-12T09:20:00.000Z",
                        subject: "Solicitud #5732: Reclamo de porcentaje de pobreza",
                        content: "Estimado Juan, \n\nEstamos procesando su reclamo sobre el porcentaje de pobreza asignado. Le notificaremos en cuanto tengamos una resolución al respecto. \n\nGracias por su paciencia.\n\nAtentamente,\n\nUnidad del Registro Social",
                        attachments: [],
                        starred: false,
                        important: false,
                        unread: true,
                        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
                        labels: ["184cd689-4ee4-47cf-9f8a-12233d614326"]
                    },
                    {
                        id: "acf493bf-5de2-42c9-9127-b9e814a3d337",
                        type: "mail",
                        from: {
                            contact: "Unidad del registro social <registro.social@company.com>"
                        },
                        to: "me <hughes.brian@company.com>",
                        cc: ["Diana Salinas <diana.salinas@company.com>", "Pablo Herrera <pablo.herrera@company.com>"],
                        bcc: ["Andres Gutierrez <andres.gutierrez@company.com>", "Gabriela Morales <gabriela.morales@company.com>"],
                        date: "2019-12-11T17:40:00.000Z",
                        subject: "Solicitud #8965: Información para acceder al Registro Social",
                        content: "Estimado Juan, \n\nAdjuntamos información detallada sobre cómo acceder al Registro Social y los pasos a seguir. Si tiene alguna duda, no dude en contactarnos. \n\nGracias por elegir nuestro servicio.\n\nAtentamente,\n\nUnidad del Registro Social",
                        attachments: [],
                        starred: false,
                        important: false,
                        unread: true,
                        folder: "7c004a19-4506-48ef-93ab-f16381302e3b",
                        labels: ["b67fc437-6118-4ec8-a3c7-9320b828e3fc"]
                    },
                    {
                        id: "18397b42-94ae-4de4-9fa7-f44a53273b27",
                        type: "mail",
                        from: {
                            contact: "Unidad del registro social <registro.social@company.com>"
                        },
                        to: "me <hughes.brian@company.com>",
                        cc: ["Eduardo Martinez <eduardo.martinez@company.com>", "Carmen Rojas <carmen.rojas@company.com>"],
                        bcc: ["Victoria Chavez <victoria.chavez@company.com>", "Fernando Lopez <fernando.lopez@company.com>"],
                        date: "2019-12-10T13:50:00.000Z",
                        subject: "Solicitud #7146: Certificado de Registro del Formulario del Registro Social",
                        content: "Estimado Juan, \n\nEl certificado solicitado ya está disponible. Por favor, utilice el enlace para proceder con la descarga: (Descargar Certificado). \n\nAtentamente,\n\nUnidad del Registro Social",
                        attachments: [],
                        starred: false,
                        important: false,
                        unread: true,
                        folder: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
                        labels: ["745cf30e-ca84-47a1-a553-b70eb630d8e7"]
                    },
                    {
                        id: "84ab8cd7-ecfc-4f46-9dc2-3b9268b8a9fb",
                        type: "mail",
                        from: {
                            contact: "Unidad del registro social <registro.social@company.com>"
                        },
                        to: "me <hughes.brian@company.com>",
                        cc: ["Teresa Alvarez <teresa.alvarez@company.com>", "Hugo Castillo <hugo.castillo@company.com>"],
                        bcc: ["Margarita Rivera <margarita.rivera@company.com>", "Francisco Ortiz <francisco.ortiz@company.com>"],
                        date: "2019-12-09T21:10:00.000Z",
                        subject: "Solicitud #3287: Actualización de datos del Formulario de Registro Social",
                        content: "Estimado Juan, \n\nSus datos han sido actualizados satisfactoriamente en el formulario de Registro Social. Por favor, revise los cambios realizados. \n\nAgradecemos su atención.\n\nAtentamente,\n\nUnidad del Registro Social",
                        attachments: [],
                        starred: false,
                        important: false,
                        unread: true,
                        folder: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
                        labels: ["8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3"]
                    }
                
                
            
            
        
    
    
]
;
