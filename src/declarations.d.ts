declare module "*.svg" {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }

  declare module '*.jsx' {
    const content: React.ComponentType<any>;
    export default content;
  }

  declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }

declare module '*.jpg' {
  const src: string;
  export default src;
};

declare module '*.jpeg' {
  const src: string;
  export default src;
};

declare module '*.png' {
  const src: string;
  export default src;
};

declare module '*.gif';

declare module '*.svg' {
  const content: string;
  export default content;
}


declare module '*.mp4' {
  const src: string;
  export default src;
}


declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

