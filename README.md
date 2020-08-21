# vue-simple-props

Main goal is to provide shorthands to create Vue.js props.

## Installation

`npm install vue-shorthand-props`

## How to use?

Two types of functions are available:
1. **_Required_**: can be used to create a _required prop_,
2. **_Default_**: can be used to create a _default prop_.

Both can be extended with Vue.js prop options.

### Example

Let's say you need to create a prop with type of String and required property equals true.

In Vue.js you can do this like below:
```javascript
props: {
  sample: {
    type: String,
    required: true
  }
}
```

With shorthand, you can do this even simpler:
```javascript
props: {
  sample: RequiredString()
}
```

That was for required prop. What if you want to create a prop with default value?

Vue.js style:
```javascript
props: {
  sample: {
    type: Number,
    default: 0 
  }
}
```

Shorthand style:
```javascript
props: {
  sample: DefaultNumber() // default value for number is 0.
}
```

It is that simple. To create a required prop you can call Required*Type* function. To create a prop with
default value you can call Default*Type* function.

Ok but what if I want to provide option like validator?

Vue.js style:
```javascript
props: {
  sample: {
    type: String,
    required: true,
    validator(value) {
      return value.length > 0;
    } 
  }
}
```

Shorthand style:
```javascript
props: {
  sample: RequiredString({
    validator(value) {
      return value.length > 0;
    } 
  })
}
```

Quite similar but you can omit type and required. 

### Can I do the same with all the available types?
Yes, you can. Every type has the same pair of functions: _RequiredType_, _DefaultType_.

* String: `RequiredString()` and `DefaultString()`. Default value is _empty string_.
* Number : `RequiredNumber()` and `DefaultNumber()`. Default value is _0_.
* Boolean: `RequiredBoolean()` and `DefaultBoolean()`. Default value is _false_.
* Date: `RequiredDate()` and `DefaultDate()`. Default value is _new Date()_.
* Array: `RequiredArray()` and `DefaultArray()`. Default value is _empty array_.
* Object: `RequiredObject()` and `DefaultObject()`. Default value is _empty object_.
* Function: `RequiredFunction()` and `DefaultFunction(() => true)`. There is no default value. You have to
provide it by yourself as first argument.

### Your own default value
Every type has default value. What if I want to provide my own default value?

```javascript
props: {
    /** String prop with default value. */
    sampleString: DefaultString('my own default value'),

    /** Number prop with default value. */
    sampleNumber: DefaultNumber(100),
    
    /** Boolean prop with default value. */
    sampleBoolean: DefaultBoolean(true),

    /** Date prop with default value. */
    sampleDate: DefaultDate(new Date('2020-01-10')),
    
    /** Array prop with default value. */
    sampleArray: DefaultArray([ 1, 2, 3 ]),
    
    /** Object prop with default value. */
    sampleObject: DefaultObject({ value: 'object value' }),

    /** Function prop with default value. */
    sampleFunction: DefaultFunction((value) => value > 10)
}
```

## TypeScript support
Every function is generic and for arrays, object and functions you can go even further.

```typescript
interface Person { name: string; };
type Validator = (value: string) => boolean;


props: {
    // Object example
    person: RequiredObject<Person>(),

    // Array example
    people: RequiredArray<Person>(),

    // Function example
    validator: DefaultFunction<Validator>((value) => value.length > 0)
}
```
