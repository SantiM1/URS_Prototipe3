/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const messages = [
    {
        id: '832276cc-c5e9-4fcc-8e23-d38e2e267bc9',
        title: 'Notificación #5617',
        description: 'Su solicitud de cambio de contraseña ha sido completada',
        time: now.minus({ minutes: 25 }).toISO(), // 25 minutes ago
        link: '/portal/notificaciones/inbox/1/c879fa32-77a5-4b39-94a3-df98b6f65f7e',
        read: false,
    },
    {
        id: '608b4479-a3ac-4e26-8675-3609c52aca58',
        title: 'Notificación #2190',
        description:
            'Certificado de Registro del Formulario del Registro Social',
        time: now.minus({ minutes: 50 }).toISO(), // 50 minutes ago
        read: false,
        link: '/portal/notificaciones',
    },
    {
        id: '22148c0c-d788-4d49-9467-447677d11b76',
        title: 'Notificación #789F',
        description: "Actualización de datos del Formulario de Registro Social Finalizada",
        time: now.minus({ hours: 3 }).toISO(), // 3 hours ago
        read: true,
        link: '/portal/notificaciones/sent',
        useRouter: true,
    },
];
