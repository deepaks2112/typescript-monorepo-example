interface AppSettings {
    PORT: number;
    NAME: string;
};

const appSettings: AppSettings = {
    PORT: Number(process.env.PORT || "3001"),
    NAME: process.env.NAME || "express-service",
};

export default appSettings;
