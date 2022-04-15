interface BoxShadow {
  offsetY: string;
  offsetX: string;
  blur: string;
  color: string;
}

// TODO define how to use box-shadow
export interface BoxShadowTokens {
  boxShadow: {
    "$shadow-level-1": BoxShadow;
    "$shadow-level-2": BoxShadow;
    "$shadow-level-3": BoxShadow;
    "$shadow-level-4": BoxShadow;
  };
}
