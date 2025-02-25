/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const messages = [
    {
        id: '832276cc-c5e9-4fcc-8e23-d38e2e267bc9',
        title: 'Solicitud #4567',
        description: 'Ingreso de Formulario del Registro Social',
        time: now.minus({ minutes: 25 }).toISO(), // 25 minutes ago
        link: 'portal/solicitudes/inbox/1/a1f7d459-4b64-482e-876e-7a493afc9bce',
        read: false,
    },
    {
        id: '608b4479-a3ac-4e26-8675-3609c52aca58',
        title: 'Solicitud #2190',
        description:
            'Certificado de Registro del Formulario del Registro Social',
        time: now.minus({ minutes: 50 }).toISO(), // 50 minutes ago
        read: false,
        link: 'portal/solicitudes',
    },
    {
        id: '22148c0c-d788-4d49-9467-447677d11b76',
        title: 'Solicitud #789F',
        description: "Actualización de datos del Formulario de Registro Social Finalizada",
        time: now.minus({ hours: 3 }).toISO(), // 3 hours ago
        read: true,
        link: 'portal/solicitudes',
        useRouter: true,
    },
];
