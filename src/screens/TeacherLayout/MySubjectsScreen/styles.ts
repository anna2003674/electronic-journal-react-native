import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5D0D0',
        flexDirection: 'column',
    },
    flatList: {
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'column',
        backgroundColor: '#D9D9D9',
        marginHorizontal: 30,
        margin: 5,
        borderRadius: 10,
    },
    itemTitleContainer: {
        backgroundColor: '#DCD3D3',
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemDescriptionContainer: {
        paddingHorizontal: 10,
    },
});
