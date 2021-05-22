import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
// import {
//   getIngredientName,
//   getAllIngredients,
// } from '../../data/MockDataAPI';

export default class IngredientsDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTitleStyle: {
        fontSize: 16
      }
    };
  };

  constructor(props) {
    super(props);
  }

  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri:'https://www.himalmart.com/public/upload/product/extra/Mustang-organic-golden-apple-5fc06014ced12.jpg'}} />
        <Text style={styles.title}>{item}</Text>
        {/* <Text style={{ color: 'grey' }}>{item[1]}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = ['apple','bar','chocolate','bank','cinammon','clove','pepper']
    const ingredientsArray = ['apple','bar','chocolate','bank','cinammon','clove','pepper'];

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}