import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Book } from '@interfaces/book';

import BookItem from './components/BookItem';
import { useHooks } from './components/useHooks';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';

function Library() {
  const {books, loading} = useHooks();

  const renderItem = ({ item }: { item: Book }) => (
    <BookItem book={item} />
  );

  if (loading) {
    return <View style={styles.emptyStateContainer}><Text style={styles.emptyStateInfo}>LOADING...</Text></View>
  }
  
  if (!books || books.length < 1) {
    return <View style={styles.emptyStateContainer}><Text style={styles.emptyStateInfo}>No se encontraron libros</Text></View>
  }

  return (
    <FlatList
      style={styles.booksList}
      data={books}
      renderItem={renderItem}
      keyExtractor={book => book.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default Library;
