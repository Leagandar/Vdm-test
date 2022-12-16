const fetchWrapper = async (url: string, { body, ...customConfig }: RequestInit = {}) => {
    const config: RequestInit = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            'Content-Type': 'application/json',
            ...customConfig.headers,
        },
    }

    if (body) {
        config.body = body
    }

    let data
    try {
        const response = await fetch(url, config)
        data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err: any) {
        return Promise.reject(err.message ? err?.message : data)
    }
}

export { fetchWrapper }