{
  "targets": [{
    "target_name": "addon",
    "sources": ["addon.cc" ],
    "include_dirs": [
      "<!(node -e \"require('nan')\")"
    ],
    "libraries": [
      "../../rust/target/release/libcollatz.dylib"
    ]
  }]
}
