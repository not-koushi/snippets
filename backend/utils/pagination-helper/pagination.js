function getPagination(query) {
    const page = Math.max(parseInt(query.page) || 1, 1);
    const limit = Math.max(parseInt(query.limit) || 10, 1);

    const offset = (page - 1) * limit;

    return {
        page,
        limit,
        offset,
    };
}

module.exports = getPagination;