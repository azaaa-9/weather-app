
        export function Circle({ size, top, left }) {
            return (
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
                className="border rounded-full border-[#ffffff] border-opacity-[8%] absolute z-20"
              ></div>
            );
          }
          export function CircleGray({ size, top, left }) {
            return (
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
                className="border rounded-full border-[#111827] border-opacity-[8%] absolute z-20"
              ></div>
            );
          }
          export function Square({ size, top, left }) {
            return (
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
                className="bg-[#0F141E] z-10 rounded-[36px] absolute"
              ></div>
            );
          }
          export function WhiteSquare({ size, top, left }) {
            return (
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
                className="bg-stone-50 absolute"
              ></div>
            );
          }
           
          export function MidCircle({ size, top, left }) {
            return (
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
                className="bg-stone-50 rounded-full absolute"
              ></div>
            );
          }
        
    
