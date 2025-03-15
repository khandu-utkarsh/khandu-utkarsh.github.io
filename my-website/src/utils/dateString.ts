export const formatDate = (date: Date | string) => {
    try {
        // Ensure we have a Date object
        const dateObject = date instanceof Date ? date : new Date(date);
        
        // Verify it's a valid date
        if (isNaN(dateObject.getTime())) {
            throw new Error('Invalid date');
        }

        return dateObject.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
    } catch (error) {
        console.warn('Invalid date format:', date, 'Error:', error);
        return 'Invalid date';
    }
}
