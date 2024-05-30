/**
 * @example class Example {
    @log
    sayHello(name: string) {
        return `Hello, ${name}!`;
    }
}

const example = new Example();

example.sayHello("World"); 

Logs: Calling sayHello with arguments: ["World"], Result of sayHello: "Hello, World!" 
 */

export function log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${propertyKey}:`, result);
    return result;
  };

  return descriptor;
}
