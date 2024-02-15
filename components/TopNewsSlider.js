import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesomeIcon
import { useNavigation } from '@react-navigation/native';

const TopNewsSlider = ({ topNews, onPress }) => {
  const navigation = useNavigation();

  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (itemId) => {
    // Check if the item is already liked
    if (likedItems.includes(itemId)) {
      // Remove from liked items
      setLikedItems(likedItems.filter((id) => id !== itemId));
    } else {
      // Add to liked items
      setLikedItems([...likedItems, itemId]);
    }
  };

  const renderCard = ({ item }) => {
    const isLiked = likedItems.includes(item.id);

    // Calculate relative time using moment
    const relativeTime = moment(item.date).fromNow();

    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 15, marginTop: 25 }}>
          <Image source={{ uri: item.featuredImage.node.sourceUrl }} style={styles.image} />
          <View style={styles.overlay} />
          <View style={styles.cardInfoContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.metaContainer}>
              <Text style={styles.category}>{item.categories.nodes[0].name}</Text>
              <Text style={styles.postedTime}>Posted: {relativeTime}</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel layout="default" data={topNews} renderItem={renderCard} sliderWidth={360} itemWidth={340} loop />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 230,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 128, 0, 0.9)', // Green overlay
    borderRadius: 10,
    top: 140,
  },
  cardInfoContainer: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  titleContainer: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    color: '#fff', // White text color
    fontSize: 13,
    fontWeight: 'bold',
  },
  postedTime: {
    color: '#fff', // White text color
    fontSize: 12,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 3,
  },
});

export default TopNewsSlider;
