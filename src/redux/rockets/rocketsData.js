const url = 'https://api.spacexdata.com/v3/rockets';

// Async Slice Drage Data
const fetchRockets = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const rocketData = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    flickrImages: rocket.flickr_images[0],
    reserved: false,
  }));

  return rocketData;
};

export default fetchRockets;
