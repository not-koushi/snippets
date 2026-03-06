function gracefulShutdown(server) {
    const shutdown = () => {
        console.log("Shutting down server...");

        server.close(() =>{
            console.log("Server closed");
            process.exit(0);
        });

        setTimeout(() => {
            console.error("Force shutdown");
            process.exit(1);
        }, 10000);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
}

module.exports = gracefulShutdown;