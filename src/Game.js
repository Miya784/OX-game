import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const Game = () => {
  const generateEmptyTable = (size) => {
    return Array.from({ length: size }, () => Array(size).fill(""));
  };

  const [size, setSize] = useState(3);
  const [table, setTable] = useState(generateEmptyTable(size));
  const [value, setValue] = useState('X');
  const [moveCount, setMoveCount] = useState(1);

const resetTable = (winner) => {
    if(winner){
        alert(`The winner is ${winner}`);
    }
    setTable(generateEmptyTable(size));
    setMoveCount(1);
}

  useEffect(() => {
    if (value === 'X') {
      setValue('O');
    } else {
      setValue('X');
    }
  }, [table]);

  const handleSizeChange = (text) => {
    const newSize = parseInt(text);
    if (!isNaN(newSize)) {
      setSize(newSize);
      setTable(generateEmptyTable(newSize));
    }
  };


  const addMove = (x, y) => {
    const newTable = [...table];
    newTable[x][y] = value;
    setTable(newTable);
    setMoveCount(moveCount + 1);
    console.log(moveCount);
    // console.log(Math.floor((size*size)/2 -1));
    if(moveCount >= Math.floor((size*size)/2 -1)){
        for(let i = 0; i < size; i++){
            let first = newTable[i][0];
            let isSome = newTable[i].some((el) => el !== first);
            if(!isSome && first !== ""){
                console.log(first);
                return resetTable(first);
            }
        };
        for(let i = 0; i < size; i++){
            let first = newTable[0][i];
            let isSome = newTable.some((el) => el[i] !== first);
            if(!isSome && first !== ""){
                console.log(first);
                return resetTable(first);
            }
        };
        for(let i = 0; i < size; i++){
            let first = newTable[0][0];
            let isSome = newTable.some((el, index) => el[index] !== first);
            if(!isSome && first !== ""){
                console.log(first);
                return resetTable(first);
            }
        };
        for(let i = 0; i < size; i++){
            let first = newTable[0][size-1];
            let isSome = newTable.some((el, index) => el[size-1-index] !== first);
            if(!isSome && first !== ""){
                console.log(first);
                return resetTable(first);
            }
        };
        for(let i = 0; i < size; i++){
            let first = newTable[size-1][0];
            let isSome = newTable.some((el, index) => el[index] !== first);
            if(!isSome && first !== ""){
                console.log(first);
                return resetTable(first);
            }
        };
        for(let i = 0; i < size; i++){
            let first = newTable[size-1][size-1];
            let isSome = newTable.some((el, index) => el[size-1-index] !== first);
            if(!isSome && first !== ""){
                console.log(first);
                return resetTable(first);
            }
        };
    };
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter table size"
        keyboardType="numeric"
        onChangeText={handleSizeChange}
      />
      <View style={styles.table}>
        {table.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <TouchableOpacity 
                key={cellIndex} 
                style={styles.cell} 
                onPress={() => addMove(rowIndex, cellIndex)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 24,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Game;