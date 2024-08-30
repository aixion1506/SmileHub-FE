import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productName: '',
  category: '',
  description: '',
  tags: '',
  price: '',
  images: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // 상품명 설정
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    // 카테고리 설정
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    // 상품 설명 설정
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    // 태그 설정
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    // 가격 설정
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    // 이미지 설정
    setImages: (state, action) => {
      state.images = action.payload;
    },
    // 상품추가
    postProduct: (state) => {
      // 상품 추가 로직 또는 API 호출을 여기에 추가할 수 있습니다.
      console.log('상품 추가:', {
        productName: state.productName,
        category: state.category,
        description: state.description,
        tags: state.tages,
        price: state.price,
        images: state.images,
      });
      // 초기 상태로 리셋
      return initialState;
    },
    resetProduct: () => initialState,
  },
});

export const {
  setProductName,
  setCategory,
  setDescription,
  setTags,
  setPrice,
  setImages,
  postProduct,
  resetProduct,
} = productSlice.actions;

// 리듀서 내보내기
export default productSlice.reducer;
