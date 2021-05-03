import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book_placeholder.png';
import styles from './styles';
import Routes from '@constants/routes';
import { useNavigation } from '@react-navigation/core';
import { Book } from '@interfaces/book';


interface Props {
  book: Book;
}

function BookItem({book}: Props) {
  const navigation = useNavigation();
  const imageUrl = book.imageUrl ? {uri: book.imageUrl} : placeholder;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(Routes.BOOK_DETAILS, {book: book})}>
      <Image source={imageUrl} style={styles.image}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
