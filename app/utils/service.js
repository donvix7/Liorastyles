const API_URL = "/api";

export async function fetchProfile(id) {
    if (!id) return { success: false, error: "Profile ID is required" };
    try {
        const res = await fetch(`${API_URL}/profile/${id}`);
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to fetch profile: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error fetching profile: " + error.message };
    }
}

export async function fetchDashboard() {
    try {
        const res = await fetch(`${API_URL}/dashboard`);
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to fetch dashboard: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error fetching dashboard: " + error.message };
    }
}


export async function fetchOrders() {
    try {
        const res = await fetch(`${API_URL}/orders`);
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to fetch orders: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error fetching orders: " + error.message };
    }
}

export async function fetchContents() {
    try {
        const res = await fetch(`${API_URL}/contents`);
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to fetch contents: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error fetching contents: " + error.message };
    }
}

export async function fetchPromotions() {
    try {
        const res = await fetch(`${API_URL}/promotions`);
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to fetch promotions: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error fetching promotions: " + error.message };
    }
}

export async function updateProfile(id, profileData) {
    if (!id) return { success: false, error: "Profile ID is required" };
    try {
        const res = await fetch(`${API_URL}/profile/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profileData)
        });
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to update profile: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error updating profile: " + error.message };
    }
}

export async function addDashboardItem(type, itemData) {
    if (!type) return { success: false, error: "Item type is required" };
    try {
        const res = await fetch(`${API_URL}/dashboard`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type, ...itemData })
        });
        const data = await res.json();
        
        if (!res.ok) {
            return { 
                success: false, 
                error: data.error || `Failed to add ${type}: ${res.statusText}`,
                status: res.status 
            };
        }
        
        return { success: true, data: data.data || data };
    } catch (error) {
        return { success: false, error: "Network error adding dashboard item: " + error.message };
    }
}
export async function fetchServices() {
    try {
        const res = await fetch("/api/services");
        const data = await res.json();
        return res.ok ? { success: true, data: data.data } : { success: false, error: data.error };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function saveService(serviceData) {
    try {
        const res = await fetch("/api/services", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        });
        const data = await res.json();
        return res.ok ? { success: true, data: data.data } : { success: false, error: data.error };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function deleteService(id) {
    try {
        const res = await fetch(`/api/services?id=${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        return res.ok ? { success: true } : { success: false, error: data.error };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function fetchBookings() {
    try {
        const res = await fetch('/api/bookings');
        const data = await res.json();
        return res.ok ? { success: true, data: data.data } : { success: false, error: data.error };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function updateBookingStatus(id, status) {
    try {
        const res = await fetch('/api/bookings', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status })
        });
        const data = await res.json();
        return res.ok ? { success: true, data: data.data } : { success: false, error: data.error };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
