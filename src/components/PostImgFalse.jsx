import style from '../css/PostImgFalse.module.css';

function PostImgFalse() {
  return (
    <div className={style.postImgFalse}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.35294 20.8823L15.8529 11.9412L20.3235 16.4118M6.35294 20.8823H17.5294C19.3812 20.8823 20.8824 19.3812 20.8824 17.5294V10.8235M6.35294 20.8823C4.50116 20.8823 3 19.3812 3 17.5294V6.35294C3 4.50116 4.50116 3 6.35294 3H13.6176M22 7.47059L19.7647 5.23529M19.7647 5.23529L17.5294 3M19.7647 5.23529L17.5294 7.47059M19.7647 5.23529L22 3M9.70588 8.02941C9.70588 8.9553 8.9553 9.70588 8.02941 9.70588C7.10352 9.70588 6.35294 8.9553 6.35294 8.02941C6.35294 7.10352 7.10352 6.35294 8.02941 6.35294C8.9553 6.35294 9.70588 7.10352 9.70588 8.02941Z"
          stroke="#ccc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="fontBodyM">첨부된 사진이 없습니다.</p>
      <p className="fontBodyM">+ 버튼을 눌러 사진을 첨부해보세요!</p>
    </div>
  );
}

export default PostImgFalse;
