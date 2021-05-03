import React, { Fragment } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book_placeholder.png';
import styles from './styles';
import { Book } from '@interfaces/book';

function BookDetails({route}: any) {
  const {book} = route.params;
  const imageUrl = book.imageUrl ? {uri: book.imageUrl} : placeholder;
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.headerContainer}>
          <Image source={imageUrl} style={styles.image}/>
          <View style={styles.infoContainer}>
            <Text numberOfLines={5} ellipsizeMode="tail" style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
          </View>
        </View>
        <View style={styles.extraInfoContainer}>
          <View style={styles.bookInfoContainer}>
            <Text style={styles.infoSubtitle}>Genre: </Text><Text style={styles.info}>{book.genre}</Text>
          </View>
          <View style={styles.bookInfoContainer}>
            <Text style={styles.infoSubtitle}>Publisher: </Text><Text style={styles.info}>{book.publisher}</Text>
          </View>
          <View style={styles.bookInfoContainer}>
            <Text style={styles.infoSubtitle}>Year: </Text><Text style={styles.info}>{book.year}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default BookDetails;
