const errorMessages: Record<number, string> = {
    [GeolocationPositionError.PERMISSION_DENIED]: 'Location access denied by user',
    [GeolocationPositionError.POSITION_UNAVAILABLE]: 'Location information unavailable',
    [GeolocationPositionError.TIMEOUT]: 'Location request timed out',
};

const getCurrentLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation || typeof window === 'undefined') {
            reject(new Error('Geolocation is not supported by this browser'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                const message = errorMessages[error.code] ?? 'Unable to retrieve location';
                reject(new Error(message));
            },
            {
                enableHighAccuracy: true,
                timeout: 2 * 1000,
                maximumAge: 60 * 1000,
            },
        );
    });
};

export default getCurrentLocation;
