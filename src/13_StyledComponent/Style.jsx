import styled, { css } from "styled-components";

export const Button = styled.button`
   padding: 10px 20px;
   border-radius: 1px solid ${({ theme }) => theme.black};
   background-color: gray;
   color: ${({ theme }) => theme.black};

   /**Xác định giá trị thuộc itnhs cursor bằng prop disabled */
   cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

   /**Xác định giá trị thuộc itnhs opacity bằng prop disabled */
   opacity: ${({ disabled }) => (disabled ? "0.65" : "1")};

   /**Kiểm tra nếu prop variant là primary sẽ thêm những thuộc tính css sau */
   ${(props) =>
      props.variant === "primary" &&
      css`
         background-color: ${props.theme.blue};
         color: ${props.theme.white};
         border-color: ${props.theme.blue};
      `};

   /**Kiểm tra nếu props variant là success sẽ thêm những thuộc tính css sau */
   ${({ variant, theme }) =>
      variant === "success" &&
      css`
         background-color: ${theme.green};
         color: ${theme.white};
         border-color: ${theme.green};
      `}
`;
