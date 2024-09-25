module.exports = async function (context, req) {
    const email = req.body.email;
    const password = req.body.password;

    // Log parameters (this can be viewed in Azure Functions logs)
    context.log(`Email: ${email}`);
    context.log(`Password: ${password}`);

    // Send a response
    context.res = {
        status: 200,
        body: { message: "Parameters received successfully." }
    };
};
