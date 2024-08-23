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

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg' {
  const content: string;
  export default content;
}