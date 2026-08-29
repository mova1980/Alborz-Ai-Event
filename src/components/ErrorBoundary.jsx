import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { err: null }
  }
  static getDerivedStateFromError(err) {
    return { err }
  }
  componentDidCatch(err, info) {
    console.error('ATW render error', err, info)
  }
  render() {
    if (this.state.err) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div style={{ padding: 40, color: '#f2f5f9', fontFamily: 'sans-serif' }}>
          <h1>خطا در بارگذاری</h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#80b3ff' }}>{String(this.state.err)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
