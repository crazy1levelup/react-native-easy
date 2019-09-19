import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer uKWHOWr-eZcDDEhf3AtYZGA6r_m1APSx005eexRk0GDK0BPql1cvmju9Z2cOmGCn-0q-sVxkKJuctoYFym-i63uhZdnnXfg9i8cDFU1D8Tblij3CutG192YQRxuDXXYx'
    }
});

