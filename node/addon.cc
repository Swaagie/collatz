#include <node.h>

using namespace v8;

extern "C" {
	extern int64_t collatz(int64_t input);
}

void Method(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	int value = args[0]->NumberValue();
	args.GetReturnValue().Set(Number::New(isolate, collatz(value)));
}

void init(Handle<Object> exports) {
	NODE_SET_METHOD(exports, "collatz", Method);
}

NODE_MODULE(addon, init)
