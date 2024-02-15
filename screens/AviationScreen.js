// AviationScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, RefreshControl } from 'react-native';
import { getNewsByCategory } from '../api/wpApi';
import { formatDistanceToNow } from 'date-fns';

const AviationScreen = ({ navigation }) => {
  const [aviationPosts, setAviationPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchAviationPosts();
  }, []);

  const fetchAviationPosts = async () => {
    try {
    setRefreshing(true);
      const aviationPostsData = await getNewsByCategory('dGVybTo1NjQ='); // Adjust the category name as needed
      setAviationPosts(aviationPostsData);
    } catch (error) {
      console.error('Error fetching aviation posts:', error);
    } finally {
      setRefreshing(false);
    }
  };
  const formatPostDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  const handlePostPress = (postId) => {
    // Navigate to the ArticleScreen with the selected post ID
    navigation.navigate('Article', { postId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Aviation Posts</Text>
      <FlatList
        data={aviationPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item.id)}>
            <View style={styles.newsItem}>
              {item.featuredImage && (
                <Image
                  source={{ uri: item.featuredImage.node.sourceUrl }}
                  style={styles.featuredImage}
                />
              )}
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postDate}>{formatPostDate(item.date)}</Text>
              {/* Add other fields as needed */}
            </View>
            </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchAviationPosts}
            colors={['#00923F']}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  featuredImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postDate: {
    color: 'gray',
  },
});

export default AviationScreen;
