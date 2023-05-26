module.exports = {
    apps: [
        {
        name: "www-ernestmarcinko",
        script: "./server.js",
        max_memory_restart: "120M",

        // Logging
        out_file: "./out.log",
        error_file: "./error.log",
        merge_logs: true,
        log_date_format: "DD-MM HH:mm:ss Z",
        log_type: "json",

        // Env Specific Config
        env_production: {
            NODE_ENV: "production",
            PORT: 8081,
            watch: true,
            watch_delay: 5000,
            exec_mode: "cluster_mode",
        },
        },
    ],
};